import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ItemCard from "./components/itemCard";
import MenuBar from "./components/menuBar";
import ActionButton from "./components/actionButton";
import OrderInput from "./components/orderInput";

export default function App() {
  return (
    <>
            <SafeAreaView style={styles.topSafeArea} />
            <SafeAreaView style={styles.container}>
                <MenuBar />
                
                <ItemCard variant="tertiary" allergene={['test', 'test2']}  />
                <ActionButton text="text" />
                <OrderInput keybordType="number-pad"/>
            </SafeAreaView>
        </>
  );
}

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0, 
    backgroundColor: "#FDF7EF"
}, 
  container: {
    flex: 1,
  },
});
