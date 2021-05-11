import React, { Component } from "react";

import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme, useRoute } from "@react-navigation/native";

import Stocks from "./Stocks/stocks";
import MutualFunds from "./MutualFunds/mutual_funds";
import Gold from "./Gold/gold";
import MainHeader from "../../components/main-header";

const Tab = createMaterialTopTabNavigator();

export default function Explore({ navigation }) {
  const { colors } = useTheme();
  const route = useRoute();

  const navigateTo = (routeName) => {
    navigation.navigate(routeName);
  };

  const mainHeader = () => {
    console.log("route.name", route.name);
    if (route.name == "Explore") {
      return <MainHeader navigateTo={navigateTo}></MainHeader>;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {mainHeader(route.name)}
      <Tab.Navigator
        initialRouteName="Stocks"
        tabBarOptions={{
          labelStyle: { fontSize: 12, color: colors.primary },
          indicatorStyle: { backgroundColor: colors.primary },
        }}
        swipeEnabled={false}
      >
        <Tab.Screen
          options={{ title: "Stocks" }}
          name="Stocks"
          component={Stocks}
        ></Tab.Screen>
        <Tab.Screen
          options={{ title: "Mutual Funds" }}
          name="MutualFunds"
          component={MutualFunds}
        ></Tab.Screen>
        <Tab.Screen
          options={{ title: "Gold" }}
          name="Gold"
          component={Gold}
        ></Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}
