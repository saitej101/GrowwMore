import React, { useContext } from "react";

import {
  View,
  Text,
  ScrollView,
  SectionList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Appbar, Avatar, Divider, List } from "react-native-paper";
import { profileStyles, styles } from "../../utils/styles";
import { useTheme } from "@react-navigation/native";

import { AuthContext } from "../../utils/authContext";
import { APP_VERSION } from "../../utils/appConstants";

export function Profile({ navigation }) {
  const [user, setUser] = useContext(AuthContext);
  const { colors } = useTheme();

  const ProfileList = [
    {
      title: "My Investments",
      data: [
        {
          title: "All Orders",
          icon: "format-list-bulleted",
          routeName: "Orders",
        },
        { title: "All SIPs", icon: "calendar", routeName: "SIPs" },
        { title: "Reports", icon: "file-chart", routeName: "Reports" },
      ],
    },
    {
      title: "My Account",
      data: [
        {
          title: "Account Details",
          icon: "account",
          routeName: "AccountDetails",
        },
        {
          title: "Bank and Autopay",
          icon: "credit-card-outline",
          routeName: "BankDetails",
        },
        {
          title: "Notifications",
          icon: "bell",
          routeName: "Notifications",
        },
      ],
    },
    {
      title: "Logout",
      header: "logout",
      data: [],
    },
    {
      title: "App Version v" + APP_VERSION,
      header: "appversion",
      data: [],
    },
  ];

  const logoutUser = () => {
    setUser(false);
  };

  const navigate = (route) => {
    console.log("route is", route);
    navigation.navigate(route);
  };

  const getMaterialList = () => {
    return (
      <ScrollView>
        <Appbar.Header style={{ backgroundColor: "#fff" }}>
          <Avatar.Image
            size={40}
            source={require("../../assets/images/profile-avatar.jpg")}
          />
          <Appbar.Content title={user.fullname} subtitle={user.email} />
        </Appbar.Header>

        <List.Section>
          <List.Subheader
            style={{ fontWeight: "bold", paddingBottom: 0, fontSize: 16 }}
          >
            My Investments
          </List.Subheader>
          <List.Item
            title="All Orders"
            titleStyle={{ fontSize: 14 }}
            left={() => <List.Icon icon="format-list-bulleted" />}
            onPress={() => {
              navigate("Orders");
            }}
          />
          <Divider />
          <List.Item
            title="All SIPs"
            titleStyle={{ fontSize: 14 }}
            left={() => <List.Icon icon="calendar" />}
            onPress={() => {
              navigate("SIPs");
            }}
          />
          <Divider />
          <List.Item
            title="Reports"
            titleStyle={{ fontSize: 14 }}
            left={() => <List.Icon icon="file-chart" />}
            onPress={() => {
              navigate("Reports");
            }}
          />
          <Divider />
        </List.Section>

        <List.Section>
          <List.Subheader
            style={{ fontWeight: "bold", paddingBottom: 0, fontSize: 16 }}
          >
            My Account
          </List.Subheader>
          <List.Item
            title="Account Details"
            titleStyle={{ fontSize: 14 }}
            left={() => <List.Icon icon="account" />}
            onPress={() => {
              navigate("AccountDetails");
            }}
          />
          <Divider />
          <List.Item
            title="Bank and Autopay"
            titleStyle={{ fontSize: 14 }}
            left={() => <List.Icon icon="credit-card-outline" />}
            onPress={() => {
              navigate("BankDetails");
            }}
          />
          <Divider />
          <List.Item
            title="Notifications"
            titleStyle={{ fontSize: 14 }}
            left={() => <List.Icon icon="bell" />}
            onPress={() => {
              navigate("Notifications");
            }}
          />
          <Divider />
        </List.Section>

        <List.Section>
          <List.Item
            title="Logout"
            titleStyle={{ fontSize: 16, fontWeight: "bold" }}
            right={() => <List.Icon icon="logout" />}
            onPress={logoutUser}
          ></List.Item>
          <Divider />
        </List.Section>
      </ScrollView>
    );
  };

  const Item = ({ listItem }) => (
    <TouchableOpacity
      onPress={() => {
        navigate(listItem.routeName);
      }}
    >
      <View style={profileStyles.item}>
        <MaterialCommunityIcons
          name={listItem.icon}
          color="#aeaeae"
          size={24}
        ></MaterialCommunityIcons>
        <Text style={profileStyles.title}>{listItem.title}</Text>
      </View>
      <Divider />
    </TouchableOpacity>
  );

  const getReactSectionList = () => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={profileStyles.profileHeader}>
          <View>
            <Image
              style={[
                profileStyles.profileAvatarImg,
                { borderColor: colors.primary },
              ]}
              source={require("../../assets/images/profile-avatar.jpg")}
            />
          </View>
          <View style={profileStyles.userHeaderDetails}>
            <Text style={profileStyles.userProfileName}>{user.fullname}</Text>
            <View style={profileStyles.userEmailSection}>
              <Text style={profileStyles.userEmail}>{user.email}</Text>
              <MaterialCommunityIcons
                name={"check"}
                color={colors.primary}
                size={18}
                style={{ paddingLeft: 5 }}
              ></MaterialCommunityIcons>
            </View>
            <View style={profileStyles.userPhoneSection}>
              <Text style={profileStyles.userPhone}>{user.phone}</Text>
              <MaterialCommunityIcons
                name={"check"}
                color={colors.primary}
                size={18}
                style={{ paddingLeft: 5 }}
              ></MaterialCommunityIcons>
            </View>
          </View>
        </View>
        <SectionList
          style={profileStyles.profileListContainer}
          sections={ProfileList}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item listItem={item} />}
          renderSectionHeader={({ section: { title, header } }) => {
            switch (header) {
              case "logout":
                return (
                  <View>
                    <TouchableOpacity
                      onPress={logoutUser}
                      style={profileStyles.logoutSection}
                    >
                      <Text style={profileStyles.logoutText}>{title}</Text>
                      <MaterialCommunityIcons
                        name="logout"
                        color="#aeaeae"
                        size={24}
                      ></MaterialCommunityIcons>
                    </TouchableOpacity>
                    <Divider />
                  </View>
                );
                break;

              case "appversion":
                return <Text style={profileStyles.item}>{title}</Text>;
                break;

              default:
                return <Text style={profileStyles.header}>{title}</Text>;
                break;
            }
          }}
        />
      </SafeAreaView>
    );
  };

  return getReactSectionList();
}

export default Profile;
