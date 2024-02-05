import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import ItemCard from "../components/itemCard";
type Props = {
  menu: any;
  updateCounter: any;
  isChecked: boolean;
  navigation: any;
};

const MenuScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>La carte</Text>
          <View style={styles.items}>
            {props.menu.map((item: { key: any; isChecked: any }) => (
              <ItemCard
                key={item.key}
                item={item}
                updateCounter={props.updateCounter}
                isChecked={item.isChecked}
                onPress={() =>
                  props.navigation.navigate("ItemDetail", {
                    item,
                    updateCounter: props.updateCounter,
                    isChecked: item.isChecked,
                  })
                }
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: "#FDF7EF",
  },
  container: {
    flex: 1,
    gap: 15,
  },
  title: {
    fontSize: 30,
  },
  content: {
    marginHorizontal: 15,
  },
  items: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 18,
  },
});

export default MenuScreen;
