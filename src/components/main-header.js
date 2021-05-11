import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { styles } from "../utils/styles";

export default function MainHeader({ navigateTo }) {
  const goToWishList = () => {
    navigateTo("Wishlist");
  };

  const goToCart = () => {
    navigateTo("Cart");
  };

  return (
    <View style={styles.exploreHeaderContainer}>
      <View style={styles.exploreHeaderSearchContainer}>
        <TextInput
          style={styles.exploreHeaderSearchInp}
          placeholder="Search mutual funds and stocks"
        />
        <MaterialCommunityIcons
          name="magnify"
          color="#aeaeae"
          size={24}
          style={styles.exploreSearchIcon}
        ></MaterialCommunityIcons>
      </View>
      <View style={styles.exploreHeaderCart}>
        <TouchableOpacity onPress={goToWishList}>
          <MaterialCommunityIcons
            name="bookmark-outline"
            color="#aeaeae"
            size={24}
            style={styles.exploreWishlistIcon}
          ></MaterialCommunityIcons>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToCart}>
          <MaterialCommunityIcons
            name="cart"
            color="#aeaeae"
            size={24}
            style={styles.exploreHeaderCartIcon}
          ></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>
    </View>
  );
}
