import React, { Component, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login/login";
import Register from "../screens/Register/register";
import { AuthPageContext } from "../utils/authContext";

export default function AuthNavigator() {
  const Stack = createStackNavigator();
  const [authPage, setAuthPage] = useState("Login");

  return (
    <AuthPageContext.Provider value={[authPage, setAuthPage]}>
      <Stack.Navigator
        screenOptions={{ headerStyle: { borderColor: "#aeaeae" } }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </AuthPageContext.Provider>
  );
}
