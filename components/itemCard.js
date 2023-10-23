import React from "react";
import {Image, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";


const ItemCard = () => {
  return (
    <View
      style={{
        width: 183,
        gap: 13,
        borderRadius: 5,
        borderColor: "#FDF7EF",
        borderWidth: 1,
      }}
    >
      <Image source={require("../assets/foodDefault.jpg")} style={{ width:183, height:183, borderTopLeftRadius:5, borderTopRightRadius:5}} />
      <View style={{ padding: 12 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Lorem ipsum</Text>
          <Text>10€</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ width: 126 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
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

export default ItemCard;
