import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { styles } from "../../../utils/styles";
import { GoldDetailService } from "../../../services/goldServices";

export default function Gold() {
  const [isLoading, setLoading] = useState(true);
  const [goldDetails, setGoldDetails] = useState([]);
  const [refreshing, setRefreshing] = useState();
  const [isBuyOption, setBuyOption] = useState(true);

  const { colors } = useTheme();

  const onRefresh = React.useCallback(() => {
    setLoading(true);
    setRefreshing(true);
    fetchGoldDetails();
  });

  const fetchGoldDetails = () => {
    GoldDetailService(
      function (resp) {
        setGoldDetails(resp.Data);
        setLoading(false);
        setRefreshing(false);
      },
      function (err) {
        alert("Something went wrong. Please try again.");
      }
    );
  };

  useEffect(() => {
    fetchGoldDetails();
  }, []);

  const toggleGoldBuySell = () => {
    if (isBuyOption) {
      setBuyOption(false);
    } else {
      setBuyOption(true);
    }
  };

  const renderGoldBenefit = ({ item }) => {
    return (
      <View style={styles.goldBenefitsContainer}>
        <View style={styles.goldBenefitIconBlock}>
          <MaterialCommunityIcons
            name={item.icon}
            size={20}
            color="#CFB53B"
            style={styles.goldBenefitIcon}
          ></MaterialCommunityIcons>
        </View>
        <View style={styles.goldBenefitDetailsBlock}>
          <Text>{item.title}</Text>
          <Text style={styles.goldBenefitSubtitle}>{item.subTitle}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.goldHeaderContainer}>
            <Text style={styles.goldHeaderTitle}>{"Explore Digital Gold"}</Text>
            <TouchableOpacity
              onPress={toggleGoldBuySell}
              style={styles.goldBuySellContainer}
            >
              {isBuyOption ? (
                <Text style={styles.goldBuySellText}>Buy Price</Text>
              ) : (
                <Text style={styles.goldBuySellText}>Sell Price</Text>
              )}
              <MaterialCommunityIcons
                name="unfold-more-horizontal"
                color="#CFB53B"
                size={18}
                style={styles.goldBuySellBtn}
              ></MaterialCommunityIcons>
            </TouchableOpacity>
          </View>
          <View style={[styles.goldPriceContainer, styles.cardShadow]}>
            <View style={styles.goldIconContainer}>
              <MaterialCommunityIcons
                name="gold"
                color="#CFB53B"
                size={25}
                style={styles.goldPriceIcon}
              ></MaterialCommunityIcons>
            </View>
            <View style={styles.goldDetailContainer}>
              <Text style={styles.goldDetailText}>
                {"Augmont Digital Gold"}
              </Text>
              <View style={styles.goldCaratPurityCont}>
                <Text style={styles.goldCaratText}>{"24K"}</Text>
                <MaterialCommunityIcons
                  name="circle-small"
                  size={12}
                ></MaterialCommunityIcons>
                <Text style={styles.goldPurityText}>{"99.90% Purity"}</Text>
              </View>
            </View>
            <View style={styles.goldRateeContainer}>
              {isBuyOption ? (
                <Text style={styles.goldPriceText}>
                  {"\u20B9" + goldDetails.buyPrice + "/gm"}
                </Text>
              ) : (
                <Text style={styles.goldPriceText}>
                  {"\u20B9" + goldDetails.sellPrice + "/gm"}
                </Text>
              )}
            </View>
          </View>

          <View style={styles.goldHeaderContainer}>
            <Text style={styles.goldHeaderTitle}>
              {"Benefits of Digital Gold"}
            </Text>
          </View>

          <FlatList
            data={goldDetails.goldBenefits}
            renderItem={renderGoldBenefit}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </ScrollView>
      )}
    </View>
  );
}
