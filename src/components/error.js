import React from "react";

import { StyleSheet, Text } from "react-native";

export function Error(props) {
    return (
        <Text style={styles.inputError} >{props.errorMessage}</Text>
    );
}

const styles = StyleSheet.create({
    inputError: {
        color: 'red',
        marginLeft: 12
    }
});