import React from "react";
import { View, Text, Image, TouchableOpacity, Share } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { SERVICE_URL } from "../../../utils/appConstants";
import { styles } from "../../../utils/styles";

export default function StockDetail({ route }) {
  console.log("item", route.params);
  const item = route.params;
  const returnValColor = item.isPositiveChange ? "#00d09c" : "red";
  const returnSign = item.isPositiveChange ? "+" : "-";

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Hey check out " + item.title + " stock",
      });

      if (result) {
        if (result.action === Share.sharedAction) {
          alert(result.activityType);
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const onAddtoWishlist = () => {
    alert("added to wishlist");
  };

  return (
    <View style={styles.stockDetailMain}>
      <View style={styles.stockDetailLogoHeader}>
        <Image
          style={styles.stockDetailLogo}
          source={{
            uri: SERVICE_URL + item.logo,
          }}
          resizeMode="stretch"
        />

        <View style={styles.stockDetailWlShareDiv}>
          <TouchableOpacity
            onPress={onAddtoWishlist}
            style={styles.stockDetailWlShareContainer}
          >
            <MaterialCommunityIcons
              name={"bookmark-outline"}
              size={20}
              color=""
              style={styles.stockDetailShareIcon}
            ></MaterialCommunityIcons>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onShare}
            style={styles.stockDetailWlShareContainer}
          >
            <MaterialCommunityIcons
              name={"share-variant"}
              size={20}
              color=""
              style={styles.stockDetailShareIcon}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.stockDetailRateHeader}>
        <Text style={styles.stockDetailTitle}>{item.title}</Text>
        <Text style={styles.stockDetailPrice}>{item.value}</Text>
        <Text style={[styles.stockDetailRate, { color: returnValColor }]}>
          {returnSign} {item.changeValue} {"(" + item.changeRate + "%)"}
        </Text>
      </View>
    </View>
  );
}
