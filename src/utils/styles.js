import React from "react";

import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  cardShadow: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#0000001f",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
  },

  appLogoLogin: {
    height: 80,
    width: 80,
    alignSelf: "center",
  },

  input: {
    height: 30,
    margin: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    lineHeight: 20,
    paddingLeft: 10,
    borderRadius: 2,
    borderColor: "#aeaeae",
  },
  flatButton: {
    margin: 10,
    marginTop: 20,
    borderColor: "#00d09c",
    borderWidth: 1,
  },
  formContainer: {
    margin: 12,
    padding: 15,
  },
  bottomRed: {
    borderBottomColor: "red",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  indiceBlock: {
    width: "46%",
    margin: "2%",
    padding: 10,
  },
  stockHeaderContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
  },
  stockHeaderTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  stockListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  stockBlock: {
    width: 120,
    flexBasis: 120,
    margin: 8,
    padding: 8,
  },
  stockBlockLogo: {
    height: 35,
    width: 35,
  },

  stockDetailMain: {
    paddingHorizontal: 15,
  },
  stockDetailLogoHeader: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  stockDetailLogo: {
    height: 40,
    width: 40,
  },
  stockDetailShareIcon: {
    textAlign: "center",
    lineHeight: 40,
  },
  stockDetailWlShareDiv: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  stockDetailWlShareContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginHorizontal: 5,

    shadowColor: "#aeaeae",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    marginLeft: 10,
  },
  stockDetailRateHeader: {
    paddingTop: 15,
  },
  stockDetailTitle: {
    fontSize: 18,
  },
  stockDetailPrice: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
  },
  stockDetailRate: {
    paddingTop: 5,
  },

  popularMfsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  popularMFHeaderContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
  },
  popularMFHeaderTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  allMFHeaderContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
  },
  allMFHeaderTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  popularMfBlock: {
    width: 260,
    height: 130,
    flexBasis: 260,
    margin: 8,
    padding: 8,
  },
  popularMFDetailTopContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  popularMFDetailBotmContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 20,
  },
  popularFundDetails: {
    width: 170,
  },
  popularMFLogoContainer: {
    paddingBottom: 10,
  },
  popularMFLogo: {
    height: 25,
    width: 25,
  },
  popularMfReturnRate: {
    fontSize: 12,
    textAlign: "right",
  },
  popularMfReturns: {
    fontSize: 12,
    color: "#aeaeae",
  },
  popularMfFundType: {
    fontSize: 12,
    color: "#aeaeae",
    lineHeight: 12,
    paddingRight: 10,
  },
  popularMfFundRating: {
    fontSize: 12,
    lineHeight: 12,
    paddingLeft: 5,
    color: "#aeaeae",
  },

  allMFundsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 10,
  },
  allMFReturnSortContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
  },
  allMFReturnSortTitle: {
    fontSize: 14,
    lineHeight: 15,
  },
  allMFundsIconBlock: {
    height: 40,
    width: 40,
  },
  mFundIcon: {
    textAlign: "center",
    height: 30,
    width: 30,
  },
  mFundContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
  },
  mFundDetailsBlock: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  mFundDetailContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
  },
  mFundContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  mFundType: {
    fontSize: 12,
    lineHeight: 12,
    color: "#aeaeae",
  },
  mFundRating: {
    fontSize: 12,
    color: "#aeaeae",
    lineHeight: 12,
  },
  mFundReturn: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 14,
    paddingRight: 10,
  },

  exploreHeaderContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 10,
    width: "100%",
  },
  exploreHeaderSearchContainer: {
    width: "70%",
  },
  exploreHeaderSearchInp: {
    borderWidth: 1,
    borderColor: "#ecedef",
    borderRadius: 8,
    height: 35,
    opacity: 0.7,
    fontSize: 12,
    paddingHorizontal: 10,
  },
  exploreHeaderCart: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "30%",
  },
  exploreSearchIcon: {
    lineHeight: 35,
    marginHorizontal: 10,
    position: "absolute",
    right: 0,
  },
  exploreWishlistIcon: {
    lineHeight: 35,
    marginHorizontal: 10,
  },
  exploreHeaderCartIcon: {
    lineHeight: 35,
  },

  goldHeaderContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  goldHeaderTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  goldPriceContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 76,
    marginHorizontal: 10,
    marginTop: 15,
  },
  goldPriceIcon: {
    marginHorizontal: 15,
    marginVertical: 25,
  },
  goldIconContainer: {
    width: "20%",
  },
  goldDetailContainer: {
    width: "50%",
  },
  goldRateeContainer: {
    width: "30%",
  },
  goldDetailText: {
    lineHeight: 38,
  },
  goldCaratPurityCont: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  goldPurityText: {
    lineHeight: 15,
    fontSize: 12,
    color: "gray",
  },
  goldCaratText: {
    lineHeight: 15,
    fontSize: 12,
    color: "gray",
  },
  goldPriceText: {
    lineHeight: 38,
    fontWeight: "bold",
  },
  goldBuySellText: {
    color: "#CFB53B",
    lineHeight: 18,
    paddingRight: 5,
  },
  goldBuySellContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 18,
    backgroundColor: "#efe2a19e",
  },
  goldBenefitsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 10,
  },
  goldBenefitIconBlock: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#fff",

    shadowColor: "#aeaeae",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
  goldBenefitIcon: {
    textAlign: "center",
    lineHeight: 40,
  },
  goldBenefitDetailsBlock: {
    paddingLeft: 15,
  },
  goldBenefitSubtitle: {
    fontSize: 12,
    color: "#aeaeae",
  },

  emptyPortfolioContainer: {
    marginVertical: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyPortfolioImg: {
    width: 100,
    height: 100,
  },
});

const profileStyles = StyleSheet.create({
  item: {
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    fontSize: 18,
    padding: 10,
    fontWeight: "bold",
  },
  title: {
    fontSize: 14,
    lineHeight: 24,
    paddingLeft: 12,
  },
  profileAvatarImg: {
    height: 45,
    width: 45,
    borderRadius: 50,
    margin: 14,
    borderWidth: 1,
  },
  profileHeader: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  userHeaderDetails: {
    paddingTop: 6,
  },
  userProfileName: {
    paddingBottom: 6,
    fontWeight: "bold",
    fontSize: 16,
  },
  logoutSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 12,
    marginVertical: 8,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileListContainer: {
    paddingTop: 15,
  },
  userEmailSection: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  userPhoneSection: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  userEmail: {
    lineHeight: 18,
  },
  userPhone: {
    lineHeight: 18,
  },
});

export { styles, profileStyles };
