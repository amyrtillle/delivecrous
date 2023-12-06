import React from "react";
import { View, Text } from "react-native";

const ItemDetailScreen = ({ route }: { route: any }) => {
  const { item } = route.params;

  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

export default ItemDetailScreen;
