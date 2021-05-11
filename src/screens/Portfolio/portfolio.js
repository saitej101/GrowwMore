import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { Component } from "react";

import { useTheme } from "@react-navigation/native";

import GoldPortfolio from "./GoldPortfolio/GoldPortfolio";
import MutualFundsPortfolio from "./MutualFundsPortfolio/MutualFundPortfolio";
import StocksPortfolio from "./StocksPortfolio/StocksPortfolio";

const Tab = createMaterialTopTabNavigator();

export default function Portfoio({ navigation }) {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 12, color: colors.primary },
        indicatorStyle: { backgroundColor: colors.primary },
      }}
    >
      <Tab.Screen
        options={{ title: "Stocks" }}
        name="StocksPortfolio"
        component={StocksPortfolio}
      ></Tab.Screen>
      <Tab.Screen
        options={{ title: "Mutual Funds" }}
        name="MutualFundsPortfolio"
        component={MutualFundsPortfolio}
      ></Tab.Screen>
      <Tab.Screen
        options={{ title: "Gold" }}
        name="GoldPortfolio"
        component={GoldPortfolio}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
