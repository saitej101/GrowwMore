import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { SERVICE_URL } from "../utils/appConstants";
import { styles } from "../utils/styles";

export const StockBlock = ({ item, blockStyle, onPress, isIndex }) => {
  const returnValColor = item.isPositiveChange ? "#00d09c" : "red";

  return (
    <TouchableOpacity onPress={onPress} style={blockStyle}>
      {!isIndex ? (
        <Image
          style={styles.stockBlockLogo}
          source={{
            uri: SERVICE_URL + item.logo,
          }}
          resizeMode="stretch"
        />
      ) : (
        <View></View>
      )}

      <Text
        numberOfLines={2}
        style={{ marginVertical: 5, height: isIndex ? 25 : 42 }}
      >
        {item.title}
      </Text>
      <Text style={{ paddingBottom: isIndex ? 15 : 0, color: "#aeaeae" }}>
        {item.benchMark}
      </Text>
      <Text style={{ paddingBottom: 5 }}>{item.value}</Text>
      <Text style={{ paddingBottom: 5, color: returnValColor }}>
        {item.changeValue} {"(" + item.changeRate + ")"}
      </Text>
    </TouchableOpacity>
  );
};
