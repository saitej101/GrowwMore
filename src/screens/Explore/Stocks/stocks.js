import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  VirtualizedList,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { StockBlock } from "../../../components/stockBlock";
import { StockService } from "../../../services/stockServices";
import { styles } from "../../../utils/styles";

export default function Stocks({ navigation }) {
  const [refreshing, setRefreshing] = useState();
  const [stockDetails, setStockDetails] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { colors } = useTheme();

  const onRefresh = React.useCallback(() => {
    setLoading(true);
    setRefreshing(true);
    fetchStockList();
  });

  const fetchStockList = () => {
    StockService(
      function (resp) {
        setStockDetails(resp.Data);
        setLoading(false);
        setRefreshing(false);
      },
      function (err) {
        alert("Something went wrong. Please try again.");
      }
    );
  };

  useEffect(() => {
    fetchStockList();
  }, []);

  const renderItem = ({ item }) => (
    <StockBlock
      item={item}
      onPress={() => {
        navigation.navigate("StockDetail", item);
      }}
      blockStyle={[styles.stockBlock, styles.cardShadow]}
    />
  );

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
          <View>
            <View style={styles.stockHeaderContainer}>
              <Text style={styles.stockHeaderTitle}>{"Market Indices"}</Text>
            </View>
            <View style={styles.stockListContainer}>
              <StockBlock
                item={stockDetails?.MarketIndices[0]}
                blockStyle={[styles.indiceBlock, styles.cardShadow]}
                onPress={() => ""}
                isIndex={true}
              />
              <StockBlock
                item={stockDetails?.MarketIndices[1]}
                blockStyle={[styles.indiceBlock, styles.cardShadow]}
                onPress={() => ""}
                isIndex={true}
              />
            </View>

            <View style={styles.stockHeaderContainer}>
              <Text style={styles.stockHeaderTitle}>{"Stocks in News"}</Text>
            </View>
            <View style={styles.stockListContainer}>
              <VirtualizedList
                data={stockDetails?.StocksInNews}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                getItemCount={() => {
                  return stockDetails ? stockDetails.StocksInNews.length : 0;
                }}
                getItem={getItem}
                initialNumToRender={1}
                windowSize={2}
              />
            </View>

            <View style={styles.stockHeaderContainer}>
              <Text style={styles.stockHeaderTitle}>{"Top Gainers"}</Text>
            </View>
            <View style={styles.stockListContainer}>
              <VirtualizedList
                data={stockDetails?.TopGainerStocks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                getItemCount={() => {
                  return stockDetails ? stockDetails.TopGainerStocks.length : 0;
                }}
                getItem={getItem}
                initialNumToRender={1}
                windowSize={2}
              />
            </View>

            <View style={styles.stockHeaderContainer}>
              <Text style={styles.stockHeaderTitle}>{"Top Loosers"}</Text>
            </View>
            <View style={styles.stockListContainer}>
              <VirtualizedList
                data={stockDetails?.TopLoosers}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                getItemCount={() => {
                  return stockDetails ? stockDetails.TopLoosers.length : 0;
                }}
                getItem={getItem}
                initialNumToRender={1}
                windowSize={2}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
