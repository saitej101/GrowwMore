import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  View,
  RefreshControl,
  VirtualizedList,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
} from "react-native";
import { useTheme } from "@react-navigation/native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MFService } from "../../../services/mutualFundServices";
import { SERVICE_URL } from "../../../utils/appConstants";
import { styles } from "../../../utils/styles";

export default function MutualFunds() {
  const [refreshing, setRefreshing] = useState();
  const [mfDetails, setMFDetails] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { colors } = useTheme();
  const [allMFReturnDisplay, setAllMFReturnDisplay] = useState("3");
  const [mfReturnDisplayVal, setMfReturnDisplayVal] = useState(
    "ThreeYearReturn"
  );

  const onRefresh = React.useCallback(() => {
    setLoading(true);
    setRefreshing(true);
    fetchMFList();
  });

  const fetchMFList = () => {
    MFService(
      function (resp) {
        setMFDetails(resp.Data);
        setLoading(false);
        setRefreshing(false);
      },
      function (err) {
        alert("Something went wrong. Please try again.");
      }
    );
  };

  const changeMFReturn = () => {
    switch (allMFReturnDisplay) {
      case "1":
        setAllMFReturnDisplay("3");
        setMfReturnDisplayVal("ThreeYearReturn");
        break;

      case "3":
        setAllMFReturnDisplay("5");
        setMfReturnDisplayVal("FiveYearReturn");
        break;

      case "5":
        setAllMFReturnDisplay("1");
        setMfReturnDisplayVal("OneYearReturn");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    fetchMFList();
  }, []);

  const renderPopularFund = ({ item }) => (
    <TouchableOpacity style={[styles.popularMfBlock, styles.cardShadow]}>
      <View style={styles.popularMFLogoContainer}>
        <Image
          style={styles.popularMFLogo}
          source={{
            uri: SERVICE_URL + item.logo,
          }}
        />
      </View>
      <View style={styles.popularMFDetailTopContainer}>
        <View style={styles.popularFundDetails}>
          <Text numberOfLines={1}>{item.fundName}</Text>
          <Text numberOfLines={1}>{item.scheme}</Text>
        </View>
        <View>
          <Text style={styles.popularMfReturnRate}>
            {item.ThreeYearReturn + "%"}
          </Text>
          <Text style={styles.popularMfReturns}>{"3Y Returns"}</Text>
        </View>
      </View>
      <View style={styles.popularMFDetailBotmContainer}>
        <Text style={styles.popularMfFundType}>{item.fundType}</Text>
        <Text style={styles.popularMfFundRating}>{item.fundRating}</Text>
        <MaterialCommunityIcons
          name="star"
          color="#aeaeae"
          size={12}
        ></MaterialCommunityIcons>
      </View>
    </TouchableOpacity>
  );

  const renderFund = ({ item, extraData }) => {
    console.log("sds", extraData);
    return (
      <TouchableOpacity>
        <View style={styles.allMFundsContainer}>
          <View style={styles.mFundDetailsBlock}>
            <View style={styles.mFundContainer}>
              <View style={{ paddingRight: 10 }}>
                <Image
                  style={styles.mFundIcon}
                  source={{
                    uri: SERVICE_URL + item.logo,
                  }}
                />
              </View>
              <View style={styles.mFundContent}>
                <Text>{item.fundName}</Text>
                <View style={styles.mFundDetailContainer}>
                  <Text style={styles.mFundType}>{item.fundType}</Text>
                  <Text style={styles.popularMfFundRating}>
                    {item.fundRating}
                  </Text>
                  <MaterialCommunityIcons
                    name="star"
                    color="#aeaeae"
                    size={12}
                  ></MaterialCommunityIcons>
                </View>
              </View>
              <Text style={styles.mFundReturn}>
                {item[mfReturnDisplayVal] + "%"}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const getItem = (data, index) => {
    return data[index];
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.popularMFHeaderContainer}>
            <Text style={styles.popularMFHeaderTitle}>{"Popular Funds"}</Text>
          </View>
          <View style={styles.popularMfsContainer}>
            <VirtualizedList
              data={mfDetails?.PopularFunds}
              renderItem={renderPopularFund}
              keyExtractor={(item) => item.id}
              horizontal={true}
              getItemCount={() => {
                return mfDetails ? mfDetails.PopularFunds.length : 0;
              }}
              getItem={getItem}
              initialNumToRender={1}
              windowSize={2}
            />
          </View>

          <View style={styles.allMFHeaderContainer}>
            <Text style={styles.allMFHeaderTitle}>{"All Mutual Funds"}</Text>
          </View>
          <TouchableOpacity
            onPress={changeMFReturn}
            style={styles.allMFReturnSortContainer}
          >
            <Text
              style={[styles.allMFReturnSortTitle, { color: colors.primary }]}
            >
              {allMFReturnDisplay + "Y Returns"}
            </Text>
            <MaterialCommunityIcons
              name="unfold-more-horizontal"
              color="#CFB53B"
              size={16}
              style={{ color: colors.primary }}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
          <View>
            <FlatList
              data={mfDetails?.allFunds}
              renderItem={renderFund}
              keyExtractor={(item) => item.id}
              extraData={allMFReturnDisplay}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
}
