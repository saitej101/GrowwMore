import React, { useContext } from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import AuthNavigator from "./auth-navigator";
import AppNavigator from "./app-navigator";

import { AuthContext } from "../utils/authContext";
import { SafeAreaView, useColorScheme } from "react-native";
import { styles } from "../utils/styles";

const MyTheme = {
  colors: {
    primary: "#00d09c",
    background: "#fff",
  },
};

//#00d09c

function RootNavigator() {
  const [user] = useContext(AuthContext);

  return (
    <NavigationContainer theme={MyTheme}>
      <SafeAreaView style={styles.container}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default RootNavigator;
