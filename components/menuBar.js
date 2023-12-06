import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native";

const MenuBar = (props) => {
  const variant = props.variant ? props.variant : "primary";
  const counter = props.counter ? props.counter : 0;
  return (
    <View style={styles.container}>
      {variant === "secondary" && (
        <TouchableOpacity onPress={props.onPress}>
          <Image
            source={require("../assets/leftArrow.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      )}

      <Text style={styles[variant].title}>Delivecrous</Text>
      <View>
        <Text style={styles.counter}>{counter}</Text>
        <Image source={require("../assets/cart.png")} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    fontSize: 15,
    textAlign: "center",
    textAlignVertical: "center",
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: "red",
    color: "white",
    position: "absolute",
    transform: [{ translateX: 23 }, { translateY: -5 }],
    zIndex: 1,
  },
  container: {
    width: "100%",
    paddingVertical: 36,
    paddingHorizontal: 26,
    backgroundColor: "#FDF7EF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 36,
    height: 36,
  },

  primary: {
    title: {
      marginLeft: "auto",
      paddingLeft: 36,
      marginRight: "auto",
      fontSize: 24,
    },
  },

  secondary: {
    title: {
      fontSize: 24,
    },
  },
});
export default MenuBar;
