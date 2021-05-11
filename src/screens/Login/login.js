import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Button,
  TouchableHighlight,
  Image,
} from "react-native";
import { validateAll } from "indicative/validator";
import { useTheme } from "@react-navigation/native";

import { AuthContext, AuthPageContext } from "../../utils/authContext";

import { styles } from "../../utils/styles";
import { Error } from "../../components/error";
import { LoginService } from "../../services/authServices";

export default function Login({ navigation }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginErros, setLoginErrors] = useState({});
  const { colors } = useTheme();

  const [user, setUser] = useContext(AuthContext);

  const rules = {
    username: "required",
    password: "required",
  };
  const messages = {
    required: (field) => `Please enter ${field}`,
  };

  const onLogin = () => {
    const data = {
      username: userName,
      password: password,
    };

    setLoginErrors({});
    validateAll(data, rules, messages)
      .then(() => {
        console.log("Inputs Validated");

        var userData = {
          username: userName.trim(),
          password: password.trim(),
        };
        LoginService(
          userData,
          function (resp) {
            console.log("Response in Login", resp);
            if (resp.ReturnCode == 200) {
              setUser(resp.data);
            } else {
              alert(resp.ReturnMessage);
              setUserName("");
              setPassword("");
            }
          },
          function (err) {
            console.log("Error Response in Login", err);
            alert("Something went wrong. Please try again.");
            setUserName("");
            setPassword("");
          }
        );
      })
      .catch((err) => {
        console.log("Error", err);
        const formatError = {};
        err.forEach((err) => {
          formatError[err.field] = err.message;
        });
        setLoginErrors(formatError);
      });
  };

  const goToRegisterpage = () => {
    console.log("", navigation);
    navigation.navigate("Register");
  };

  const validateInputs = () => {
    const data = {
      username: userName,
      password: password,
    };

    setLoginErrors({});

    validateAll(data, rules, messages)
      .then(() => {
        console.log("Inputs Validated");
      })
      .catch((err) => {
        console.log("Error", err);
        const formatError = {};
        err.forEach((err) => {
          formatError[err.field] = err.message;
        });
        setLoginErrors(formatError);
      });
  };

  return (
    <SafeAreaView>
      <View style={[styles.formContainer, styles.cardShadow]}>
        <Image
          style={styles.appLogoLogin}
          source={require("../../assets/images/app-logo.jpg")}
        />
        <TextInput
          textContentType="username"
          style={[
            styles.input,
            loginErros && loginErros.username ? styles.bottomRed : "",
          ]}
          placeholder="User Name"
          value={userName}
          onChangeText={setUserName}
          onBlur={validateInputs}
        />
        <Error errorMessage={loginErros ? loginErros.username : ""} />
        <TextInput
          secureTextEntry
          textContentType="password"
          style={[
            styles.input,
            loginErros && loginErros.password ? styles.bottomRed : "",
          ]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          onBlur={validateInputs}
        />
        <Error errorMessage={loginErros ? loginErros.password : ""} />

        <View style={[styles.flatButton, { borderColor: colors.primary }]}>
          <Button color={colors.primary} title="Login" onPress={onLogin} />
        </View>

        <View style={{ flexDirection: "row", margin: 12 }}>
          <Text style={{ paddingRight: 8 }}>{"New User ?"}</Text>
          <TouchableHighlight onPress={goToRegisterpage}>
            <Text style={{ fontWeight: "bold", color: colors.primary }}>
              Register
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}
