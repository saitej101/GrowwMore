import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  TouchableHighlight,
  Button,
  Text,
  Image,
} from "react-native";
import { validateAll, validations } from "indicative/validator";
import { useTheme } from "@react-navigation/native";

import { styles } from "../../utils/styles";
import { AuthContext, AuthPageContext } from "../../utils/authContext";
import { Error } from "../../components/error";
import { RegisterService } from "../../services/authServices";

export default function Register({ navigation }) {
  const [user, setUser] = useContext(AuthContext);
  const { colors } = useTheme();

  const [username, setUserName] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPaassword] = useState("");
  const [confmPassword, setConfmPassword] = useState("");

  const [registerErrors, setRegisterErrors] = useState({});

  const goToLoginPage = () => {
    navigation.navigate("Login");
  };

  const rules = {
    username: "required|min:6|alpha_numeric",
    fullname: "required",
    email: "required|email",
    phone: "required|number",
    password: [
      validations.regex([
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
      ]),
      validations.required(),
    ],
    confmpassword: "required|same:password",
  };

  const messages = {
    required: (field) => `Please enter ${field}`,
    "username.min": "Username must be of atleast 6 characters",
    "username.alpha_numeric":
      "Username should not contain any special characters",
    "email.email": "Please enter a valid email address",
    "phone.number": "Please enter a valid phone number",
    "phone.min": "Please enter a valid phone number",
    "password.regex":
      "The Password must contain a minimum of 8 characters, 1 upper case alphabet, 1 lower case alphabet, 1 special character(!@#$%&^*) and 1 number",
    "confmpassword.same":
      "Password and Confirm Password must match. Please re-enter",
  };

  const onRegister = () => {
    const data = {
      username: username,
      fullname: fullname,
      email: email,
      phone: phone,
      password: password,
      confmpassword: confmPassword,
    };

    setRegisterErrors({});
    validateAll(data, rules, messages)
      .then(() => {
        RegisterService(
          data,
          function (resp) {
            if (resp.ReturnCode == 200) {
              alert(resp.ReturnMessage + " Login to proceed.");
              goToLoginPage();
            } else {
              alert(resp.ReturnMessage);
            }
          },
          function () {}
        );
      })
      .catch((err) => {
        console.log("Inputs errors", err);
        const formatError = {};
        err.forEach((err) => {
          formatError[err.field] = err.message;
        });
        setRegisterErrors(formatError);
      });
  };

  const validateInputs = () => {
    const data = {
      username: username,
      fullname: fullname,
      email: email,
      phone: phone,
      password: password,
      confmpassword: confmPassword,
    };

    setRegisterErrors({});
    validateAll(data, rules, messages)
      .then(() => {})
      .catch((err) => {
        console.log("Inputs errors", err);
        const formatError = {};
        err.forEach((err) => {
          formatError[err.field] = err.message;
        });
        setRegisterErrors(formatError);
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
          style={[
            styles.input,
            registerErrors && registerErrors.username ? styles.bottomRed : "",
          ]}
          placeholder="User Name"
          value={username}
          onChangeText={setUserName}
          onBlur={validateInputs}
        />
        <Error errorMessage={registerErrors ? registerErrors.username : ""} />
        <TextInput
          style={[
            styles.input,
            registerErrors && registerErrors.fullname ? styles.bottomRed : "",
          ]}
          placeholder="Full Name"
          value={fullname}
          onChangeText={setFullName}
          onBlur={validateInputs}
        />
        <Error errorMessage={registerErrors ? registerErrors.fullname : ""} />
        <TextInput
          keyboardType="email-address"
          style={[
            styles.input,
            registerErrors && registerErrors.email ? styles.bottomRed : "",
          ]}
          placeholder="Email Id"
          value={email}
          onChangeText={setEmail}
          onBlur={validateInputs}
        />
        <Error errorMessage={registerErrors ? registerErrors.email : ""} />
        <TextInput
          keyboardType="phone-pad"
          style={[
            styles.input,
            registerErrors && registerErrors.phone ? styles.bottomRed : "",
          ]}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          onBlur={validateInputs}
        />
        <Error errorMessage={registerErrors ? registerErrors.phone : ""} />
        <TextInput
          secureTextEntry
          textContentType="password"
          style={[
            styles.input,
            registerErrors && registerErrors.password ? styles.bottomRed : "",
          ]}
          placeholder="Password"
          value={password}
          onChangeText={setPaassword}
          onBlur={validateInputs}
        />
        <Error errorMessage={registerErrors ? registerErrors.password : ""} />
        <TextInput
          textContentType="password"
          style={[
            styles.input,
            registerErrors && registerErrors.confmpassword
              ? styles.bottomRed
              : "",
          ]}
          placeholder="Confirm Password"
          value={confmPassword}
          onChangeText={setConfmPassword}
          onBlur={validateInputs}
        />
        <Error
          errorMessage={registerErrors ? registerErrors.confmpassword : ""}
        />

        <View style={[styles.flatButton, { borderColor: colors.primary }]}>
          <Button
            title="Register"
            color={colors.primary}
            onPress={onRegister}
          />
        </View>

        <View style={{ flexDirection: "row", margin: 12 }}>
          <Text style={{ paddingRight: 8 }}>{"Already have a account ?"}</Text>
          <TouchableHighlight onPress={goToLoginPage}>
            <Text style={{ fontWeight: "bold", color: colors.primary }}>
              Login
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}
