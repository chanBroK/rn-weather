import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting The Weather</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 100,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
  },
  text: { color: "#2c2c2c", fontSize: 20 },
});

///flex 를 이용해서 코딩 -> 항상 동적으로 자리를 할당함
export default Loading;
