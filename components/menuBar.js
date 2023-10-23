import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const MenuBar = () => {
    return(

    <View style={styles.container}>
        <Image source={require("../assets/leftArrow.png")} style={styles.image}/>
        <Text>Delivecrous</Text>
        <Image source={require("../assets/cart.png")} style={styles.image}/>

    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 36,
        paddingHorizontal: 26,
        backgroundColor: "#FDF7EF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    image:{
        width: 36,
        height: 36,
    }
});
export default MenuBar;