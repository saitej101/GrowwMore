import React from "react";
import Home from "../screens/Home/home";
import { createStackNavigator } from "@react-navigation/stack";
import AccountDetails from "../screens/Profile/accountDetails";
import Orders from "../screens/Profile/orders";
import SIPs from "../screens/Profile/sips";
import Reports from "../screens/Profile/reports";
import BannkDetails from "../screens/Profile/bankDetails";
import Notifications from "../screens/Profile/notifications";
import Wishlist from "../screens/Wishlist/wishlist";
import Cart from "../screens/Cart/cart";
import StockDetail from "../screens/Explore/Stocks/stock-detail";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { borderColor: "#aeaeae" } }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ title: "All Orders" }}
        name="Orders"
        component={Orders}
      />
      <Stack.Screen
        options={{ title: "My SIPs" }}
        name="SIPs"
        component={SIPs}
      />
      <Stack.Screen
        options={{ title: "Reports" }}
        name="Reports"
        component={Reports}
      />
      <Stack.Screen
        options={{ title: "Personal Details" }}
        name="AccountDetails"
        component={AccountDetails}
      />
      <Stack.Screen
        options={{ title: "Bank Account Details" }}
        name="BankDetails"
        component={BannkDetails}
      />
      <Stack.Screen
        options={{ title: "Notifications" }}
        name="Notifications"
        component={Notifications}
      />
      <Stack.Screen
        options={{ title: "Wishlist" }}
        name="Wishlist"
        component={Wishlist}
      />
      <Stack.Screen options={{ title: "Cart" }} name="Cart" component={Cart} />
      <Stack.Screen
        options={{ title: "", headerStyle: { borderBottomWidth: 0 } }}
        name="StockDetail"
        component={StockDetail}
      />
    </Stack.Navigator>
  );
}
