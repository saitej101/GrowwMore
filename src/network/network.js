import React from "react";

export function Network(serviceUrl, requestDetails) {
    return fetch(serviceUrl,requestDetails);
}