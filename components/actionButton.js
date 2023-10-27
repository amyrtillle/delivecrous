import React from "react";
import { StyleSheet, Alert, Text, TouchableOpacity, View } from "react-native";

const ActionButton = (props) => {
  const text = props.text ? props.text : "Lorem ipsum";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Simple Button pressed")}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#713335",
    borderRadius: 3,
    paddingVertical: 13,
    paddingHorizontal: 30,
    alignSelf: "flex-start",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    margin: "auto",
  },
});

export default ActionButton;
