import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../../../utils/styles";
import { useTheme } from "@react-navigation/native";

export default function GoldPortfolio({ navigation }) {
  const { colors } = useTheme();

  const goToExploreGold = () => {
    navigation.navigate("Gold");
  };

  return (
    <View style={styles.emptyPortfolioContainer}>
      <Image
        style={styles.emptyPortfolioImg}
        source={require("../../../assets/images/emptyPortfolio.png")}
      />
      <Text style={{ fontWeight: "bold", marginTop: 20 }}>
        {"No treasure yet!"}
      </Text>
      <Text style={{ marginTop: 15 }}>
        {"Invest in Digital Gold and see it here"}
      </Text>
      <TouchableOpacity onPress={goToExploreGold} style={{ marginTop: 30 }}>
        <Text style={{ color: colors.primary, fontWeight: "bold" }}>
          {"INVEST IN GOLD"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
