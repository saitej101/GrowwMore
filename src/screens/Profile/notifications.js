import React from "react";
import { View, Text } from "react-native";

export default function Notifications() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ padding: 40, fontSize: 16 }}>
        {"No Pending Notifications"}
      </Text>
    </View>
  );
}
