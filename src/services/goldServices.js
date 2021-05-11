import React from "react";
import { Network } from "../network/network";
import { SERVICE_URL } from "../utils/appConstants";

export function GoldDetailService(successCallback, errorCallback) {
  var serviceUrl = SERVICE_URL + "goldDetails";

  Network(serviceUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("Response", json);
      successCallback(json);
    })
    .catch((error) => {
      errorCallback(error);
      console.error(error);
    });
}
