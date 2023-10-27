import React from "react";
import { StyleSheet, Image, Text, View, FlatList } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import defaultFood from "../assets/foodDefault.jpg";

const ItemCard = (props) => {
  const variant = props.variant ? props.variant : "primary";
  const title = props.title ? props.title : "Lorem ipsum";
  const price = props.price ? props.price : "10";
  const description = props.description
    ? props.description
    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const image = props.image
    ? props.image
    : Image.resolveAssetSource(defaultFood).uri;

  const allergene = props.allergene ? props.allergene : null;

  return (
    <View style={[styles[variant].container, styles.container]}>
      <Image
        source={{ uri: image }}
        style={[styles[variant].image, styles.image]}
      />
      <View style={styles[variant].textContainer}>
        <View style={styles.text}>
          <Text>{title}</Text>
          <Text>{price}€</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles[variant].desc}>{description}</Text>
          <BouncyCheckbox
            style={{ width: 24 }}
            size={24}
            text=""
            fillColor={styles[variant].fillColor}
            bounceEffectIn={1}
            bounceEffectOut={1}
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
    fillColor: "#E33620",
    desc: {
      width: 126,
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
    desc: {
      width: 126,
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
