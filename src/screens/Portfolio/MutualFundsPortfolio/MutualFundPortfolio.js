import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { styles } from "../../../utils/styles";

export default function MutualFundsPortfolio({ navigation }) {
  const { colors } = useTheme();

  const goToExploreMutualFunds = () => {
    navigation.navigate("MutualFunds");
  };

  return (
    <View style={styles.emptyPortfolioContainer}>
      <Image
        style={styles.emptyPortfolioImg}
        source={require("../../../assets/images/emptyPortfolio.png")}
      />
      <Text style={{ fontWeight: "bold", marginTop: 20 }}>
        {"Didn't invest yet?"}
      </Text>
      <Text style={{ marginTop: 15 }}>
        {"Its a good day to start investing"}
      </Text>
      <TouchableOpacity
        onPress={goToExploreMutualFunds}
        style={{ marginTop: 30 }}
      >
        <Text style={{ color: colors.primary, fontWeight: "bold" }}>
          {"EXPLORE FUNDS"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
