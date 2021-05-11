import React, { Component } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "@react-navigation/native";

import Explore from "../Explore/explore";
import Portfolio from "../Portfolio/portfolio";
import Profile from "../Profile/profile";

const Tab = createBottomTabNavigator();

export default function Home() {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "gray",
        activeBackgroundColor: colors.primary,
        style: { borderTopWidth: 0 },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="compass"
              color={color}
              size={size}
            ></MaterialCommunityIcons>
          ),
        }}
        name="Explore"
        component={Explore}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Portfolio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              color={color}
              size={size}
            ></MaterialCommunityIcons>
          ),
        }}
        name="Portfolio"
        component={Portfolio}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={size}
            ></MaterialCommunityIcons>
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
