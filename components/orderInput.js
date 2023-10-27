import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const ActionButton = (props) => {
  const placeholder = props.placeholder ? props.placeholder : "Placeholder";
  const keyboardType =
    props.keyboardType === "number-pad" ? props.keyboardType : "default";
  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        style={styles.placeholder}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={name}
        onChangeText={(value) => setName(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#748090",
    paddingRight: 27,
    alignSelf: "flex-start",
    maxWidth: 292,
  },
});

export default ActionButton;
