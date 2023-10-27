import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const MenuBar = (props) => {
  const variant = props.variant ? props.variant : "primary";
  return (
    <View style={styles.container}>
      {variant === "secondary" && (
        <Image
          source={require("../assets/leftArrow.png")}
          style={styles.image}
        />
      )}

      <Text style={styles[variant].title}>Delivecrous</Text>
      <Image source={require("../assets/cart.png")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
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
