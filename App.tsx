import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemDetailScreen from "./views/ItemDetailScreen";

import MenuBar from "./components/menuBar";
import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MenuScreen from "./views/HomeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const [menu, setMenu] = useState([
    {
      key: 1,
      title: "Burger",
      price: 12,
      description: "un burger tout ce qu'il y a de plus classique",
      image:
        "https://www.socopa.fr/wp-content/uploads/2023/05/bao-burger-1.jpg",
      isChecked: false,
    },
    {
      key: 2,
      title: "Pizza",
      price: 15,
      description: "Une pizza margarita, c bon ça",
      image:
        "https://img.cuisineaz.com/660x660/2021/02/25/i159373-pizza-margherita.jpeg",
      isChecked: false,
      allergene: ["gluten", "lactose", "oeuf", "tomate", "mozzarella"],
    },
    {
      key: 3,
      title: "Fries",
      price: 8,
      description: "Des frites, ça fait toujours plaisir",
      image:
        "https://img-3.journaldesfemmes.fr/C5EOtA1h6Kn6_Jthz_R1nZWVOac=/1500x/smart/d72f4f8d3c6a45699a979e56df4b2d53/ccmcms-jdf/10820734.jpg",
      isChecked: false,
    },
  ]);

  const [counter, setCounter] = useState(0);

  const updateCounter = useCallback((increment: boolean, key: number) => {
    setMenu((prevMenu) =>
      prevMenu.map((item) =>
        item.key === key ? { ...item, isChecked: !item.isChecked } : item
      )
    );

    setCounter((prevCounter) =>
      increment ? prevCounter + 1 : prevCounter - 1
    );
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={styles.topSafeArea} />
        <SafeAreaView style={{ flex: 1 }}>
          <MenuBar counter={counter} />
          <Stack.Navigator>
            <Stack.Screen name="Menu" options={{ headerShown: false }}>
              {(props) => (
                <MenuScreen
                  isChecked={false}
                  {...props}
                  menu={menu}
                  updateCounter={updateCounter}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="ItemDetail" options={{ headerShown: false }}>
              {(props) => (
                <ItemDetailScreen
                  {...props}
                  menu={menu}
                  setMenu={setMenu}
                  counter={counter}
                  setCounter={setCounter}
                  updateCounter={updateCounter}
                  isChecked={false}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
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

export default App;
