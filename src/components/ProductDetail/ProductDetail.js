import React from 'react';
import { Image, Text, View, Dimensions, TouchableOpacity } from "react-native";
import Header from "../Header/Header";
import image from "../../assets/SliderImage/4.jpg";
import Icon from "react-native-vector-icons/MaterialIcons";

const ProductDetail = ({ navigation }) => {
    const { width } = Dimensions.get("window");
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header navigation={navigation} component="Pizza Margherita" />
            <Image source={image} style={{ width, height: 225 }} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 15, alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Ingredients</Text>
                <Text style={{ fontSize: 20, color: "#bad759", fontWeight: "bold" }}>$18</Text>
            </View>
            <View style={{ paddingHorizontal: 15 }}>
                <Text style={{ color: "#777", fontSize: 14 }}>
                    Pizza margherita is typical Neapoliton Pizza made with San Marzano tomatoes
                    Pizza margherita is typical Neapoliton Pizza made with San Marzano tomatoes
                    Pizza margherita is typical Neapoliton Pizza made with San Marzano tomatoes...
                </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 15, alignItems: "center" }}>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name="star-rate" color="#bad759" style={{ marginRight: 2 }} />
                        <Text style={{ color: "#777" }}>4.9</Text>
                    </View>
                    <Text style={{ color: "#777" }}>Rating</Text>
                </View>
                <View>
                    <Text style={{ color: "#777" }}>2356</Text>
                    <Text style={{ color: "#777" }}>Reviews</Text>
                </View>
                <View>
                    <Text style={{ color: "#777" }}>6.4k</Text>
                    <Text style={{ color: "#777" }}>Orders</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("PlacedOrder")}>
                <Text style={{
                    textAlign: "center",
                    paddingVertical: 10,
                    fontSize: 18,
                    backgroundColor: "#bad759",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: 15,
                    marginHorizontal: 15,
                    marginVertical: 15
                }}
                >Place Order
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Rating")}>
                <Text style={{
                    textAlign: "center",
                    paddingVertical: 10,
                    fontSize: 18,
                    color: "#bad759",
                    fontWeight: "bold",
                    borderRadius: 15,
                    marginHorizontal: 15,
                    borderWidth: 1,
                    borderColor: "#bad759"
                }}
                >Rate Product
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductDetail;