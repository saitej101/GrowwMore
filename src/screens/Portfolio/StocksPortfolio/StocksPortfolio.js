import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { styles } from "../../../utils/styles";

export default function StocksPortfolio({ navigation }) {
  const { colors } = useTheme();
  const goToExploreStocks = () => {
    navigation.navigate("Stocks");
  };

  return (
    <View style={styles.emptyPortfolioContainer}>
      <Image
        style={styles.emptyPortfolioImg}
        source={require("../../../assets/images/emptyPortfolio.png")}
      />
      <Text style={{ fontWeight: "bold", marginTop: 20 }}>
        {"Didn't buy anything yet?"}
      </Text>
      <Text style={{ marginTop: 15 }}>
        {"Buy stocks and own companies you like"}
      </Text>
      <TouchableOpacity onPress={goToExploreStocks} style={{ marginTop: 30 }}>
        <Text style={{ color: colors.primary, fontWeight: "bold" }}>
          {"EXPLORE STOCKS"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
