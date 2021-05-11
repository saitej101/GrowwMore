import React from "react";
import { View, Text } from "react-native";

export default function Cart() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ padding: 40, fontSize: 16 }}>{"Empty Cart"}</Text>
    </View>
  );
}
