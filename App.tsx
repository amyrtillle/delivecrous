import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ItemCard from "./components/itemCard";
import MenuBar from "./components/menuBar";

export default function App() {
  return (
    <>
            <SafeAreaView style={styles.topSafeArea} />
            <SafeAreaView style={styles.container}>
                <MenuBar />
                
                <ItemCard />
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
