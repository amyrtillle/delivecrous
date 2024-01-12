import React, { useCallback, useLayoutEffect } from "react";
import { View } from "react-native";
import ItemCard from "../components/itemCard";

type Props = {
  route: any;
  navigation: any;
  menu: any;
  setMenu: React.Dispatch<React.SetStateAction<any[]>>;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  updateCounter: (increment: boolean, key: number) => void;
};

const ItemDetailScreen = ({
  route,
  navigation,
  menu,
  setMenu,
  counter,
  setCounter,
  updateCounter,
}: Props) => {
  const { item } = route.params;
  item.variant = "tertiary";

  const handleCheckboxPress = () => {
    updateCounter(!item.isChecked, item.key);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item.title,
      headerTitleStyle: {
        textAlign: "center",
      },
    });
  }, [navigation, item.title]);

  return (
    <View>
      <ItemCard
        key={item.key}
        item={item}
        updateCounter={updateCounter}
        isChecked={item.isChecked}
        onPress={handleCheckboxPress}
      />
    </View>
  );
};

export default ItemDetailScreen;
