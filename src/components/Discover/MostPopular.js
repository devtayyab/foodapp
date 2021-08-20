import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
import pic1 from "../../assets/SliderImage/1.jpg";
import pic2 from "../../assets/SliderImage/2.jpg";
import pic3 from "../../assets/SliderImage/3.jpg";
import pic4 from "../../assets/SliderImage/4.jpg";
import pic5 from "../../assets/SliderImage/5.jpg";

const MostPopular = ({ Heading, navigation, resDetail }) => {
    const array = [pic1, pic2, pic3, pic4, pic5];

    const navigationFunc = () => {
        if (resDetail === true) {
            return navigation.navigate("ProdDetail");
        }
        else {
            return navigation.navigate("ResDetail");
        }
    }

    const _renderItems = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={navigationFunc} style={styles.view}>
                <Image key={index} source={item} style={styles.image} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                    <Text style={{ color: "#777" }}>Regata</Text>
                    <Text style={{ color: "#777" }}>5 Km</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return <>
        <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#777" }}>{Heading}</Text>
        </View>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 2 }}
            data={array}
            renderItem={_renderItems}
            keyExtractor={(item, index) => index.toString()}
        />
    </>
}

export default MostPopular;

const styles = StyleSheet.create({
    view: {
        height: 140,
        width: 110,
        marginHorizontal: 10,
        borderRadius: 15,
    },
    image: {
        height: 110,
        width: 110,
        borderRadius: 15,
    }
})