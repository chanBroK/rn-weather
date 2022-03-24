import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import * as vIcon from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const Weather = ({ temp, condition }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#4c669f", "#3b5998", "#192f6a"]}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <vIcon.Feather name="sun" size={90} color="white" />
        <Text style={styles.temp}>{temp}℃</Text>
        <Text style={styles.locationText}>
        Current
        </Text> 
        <Text style={styles.locationText}>
        Soul
        </Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 30,
    padding: 10,
    color: "white",
  },
  locationText : {
    fontSize: 20,
    padding: 10,
    color : "white",
  }
});
export default Weather;
