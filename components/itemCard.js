import React, { useState } from "react";
import { StyleSheet, Image, Text, View, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import defaultFood from "../assets/foodDefault.jpg";

const ItemCard = (props) => {
  const item = props.item;
  const isChecked = props.isChecked;
  const variant = item.variant ? item.variant : "primary";
  const title = item.title ? item.title : "Lorem ipsum";
  const price = item.price ? item.price : "10";
  const description = item.description
    ? item.description
    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const image = item.image
    ? item.image
    : Image.resolveAssetSource(defaultFood).uri;

  const allergene = item.allergene ? item.allergene : null;

  const handleCheckboxPress = () => {
    props.updateCounter(!isChecked, item.key);
  };

  const handleCardPress = () => {
    // Navigate or perform other actions when the card is pressed
    // Example: props.navigation.navigate('ItemDetail', { item });
  };

  return (
    <View style={[styles[variant].container, styles.container]}>
      <TouchableOpacity onPress={handleCardPress}>
        <Image
          source={{ uri: image }}
          style={[styles[variant].image, styles.image]}
        />
      </TouchableOpacity>
      <View style={styles[variant].textContainer}>
        <View style={styles.text}>
          <Text>{title}</Text>
          <Text>{price}€</Text>
        </View>
        <View style={styles.descContent}>
          <Text style={styles.descText}>{description}</Text>
          <BouncyCheckbox
            size={24}
            text=""
            fillColor={styles[variant].fillColor}
            bounceEffectIn={1}
            bounceEffectOut={1}
            onPress={handleCheckboxPress}
            isChecked={isChecked}
          />
        </View>
      </View>
      {allergene && (
        <View style={styles.tertiary.textContainer}>
          <View style={styles.text && styles.allergene}>
            <Text>Allergenes</Text>
            <FlatList
              data={allergene}
              renderItem={({ item }) => <Text>{item.key}</Text>}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  allergene: {
    gap: 22,
  },
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
  descContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  descText: {
    width: "80%",
  },

  primary: {
    container: {
      width: "45%",
      gap: 13,
    },
    image: {
      width: "100%",
      height: 207,
      borderTopRightRadius: 5,
    },
    textContainer: { padding: 12, gap: 13 },
    fillColor: "#E33620",
    desc: {
      width: "100%",
    },
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
    fillColor: "#713335",
    desc: {
      width: "100%",
    },
  },

  tertiary: {
    image: {
      width: "100%",
      aspectRatio: "4/3",
      borderBottomLeftRadius: 5,
    },
    textContainer: {
      paddingLeft: 8,
      paddingTop: 8,
      paddingRight: 15,
      paddingBottom: 15,
      gap: 10,
      justifyContent: "space-between",
    },
    fillColor: "#E33620",
    desc: {
      width: "50%",
      textAlign: "center",
    },
  },
});

export default ItemCard;
