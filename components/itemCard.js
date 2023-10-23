import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const ItemCard = (props) => {
  const variant = props.variant ? props.variant : "primary";
  const title = props.title ? props.title : "Lorem ipsum";
  const price = props.price ? props.price : "10";
  const description = props.description
    ? props.description
    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const image = props.image
    ? "../assets/" + props.image + "jpg"
    : require("../assets/foodDefault.jpg");

  return (
    <View style={[styles[variant].container, styles.container]}>
      <Image source={image} style={[styles[variant].image, styles.image]} />
      <View style={styles[variant].textContainer}>
        <View style={styles.text}>
          <Text>{title}</Text>
          <Text>{price}€</Text>
        </View>
        <View style={styles.text}>
          <Text style={{ width: 126 }}>{description}</Text>
          <BouncyCheckbox
            style={{ width: 24 }}
            size={24}
            text=""
            fillColor="#E33620"
            bounceEffectIn={1}
            bounceEffectOut={1}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderColor: "#FDF7EF",
    borderWidth: 1,
  },

  image: {
    borderTopLeftRadius: 5,
  },
  text: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  primary: {
    container: {
      width: 183,
      gap: 13,
    },
    image: {
      width: 183,
      height: 207,
      borderTopRightRadius: 5,
    },
    textContainer: { padding: 12, gap: 13 },
  },
  secondary: {
    container: {
      flexDirection: "row",
      height: 108,
      width: 359,
    },
    image: {
      width: 109,
      height: "100%",
      borderBottomLeftRadius: 5,
    },

    textContainer: {
      flexGrow: 1,
      justifyContent: "space-between",
      paddingLeft: 8,
      paddingTop: 8,
      paddingRight: 15,
      paddingBottom: 15,
    },
  },
});

export default ItemCard;
