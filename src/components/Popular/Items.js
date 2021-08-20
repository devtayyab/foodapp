import React from 'react';
import { View, Text, Image, FlatList, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import pic1 from "../../assets/SliderImage/1.jpg";
import pic2 from "../../assets/SliderImage/2.jpg";
import pic3 from "../../assets/SliderImage/3.jpg";
import pic4 from "../../assets/SliderImage/4.jpg";
import pic5 from "../../assets/SliderImage/5.jpg";
import Icon from "react-native-vector-icons/MaterialIcons";
const { width } = Dimensions.get("window");

const Items = ({ navigation }) => {
    const array = [
        { image: pic1, name: "John's Place", distance: "5 Km", rating: "4.9", reviews: "2356", time: "9am-11pm" },
        { image: pic2, name: "John's Place", distance: "5 Km", rating: "4.9", reviews: "2356", time: "9am-11pm" },
        { image: pic3, name: "John's Place", distance: "5 Km", rating: "4.9", reviews: "2356", time: "9am-11pm" },
        { image: pic4, name: "John's Place", distance: "5 Km", rating: "4.9", reviews: "2356", time: "9am-11pm" },
        { image: pic5, name: "John's Place", distance: "5 Km", rating: "4.9", reviews: "2356", time: "9am-11pm" },
    ];
    const _renderItems = ({ item, index }) => {
        return <TouchableOpacity onPress={() => navigation.navigate("ResDetail")} key={index} style={styles.mainView}>
            <Image
                source={item.image}
                style={styles.image}
            />
            <View style={styles.detailView}>
                <View>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>{item.name}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name="star-rate" color="#bad759" style={{ marginRight: 2 }} />
                        <Text style={styles.textMuted}>{item.rating}</Text>
                    </View>
                    <Text style={styles.textMuted}>Rating</Text>
                    <Text style={styles.textMuted}>{item.time}</Text>
                </View>
                <View>
                    <View>
                        <Text style={{ fontSize: 17, color: "#777" }}>{item.distance}</Text>
                        <Text style={styles.textMuted}>{item.reviews}</Text>
                        <Text style={styles.textMuted}>Review</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    }
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 15, paddingHorizontal: 10 }}
            data={array}
            renderItem={_renderItems}
        />
    )
}

export default Items;

const styles = StyleSheet.create({
    mainView: {
        width,
        backgroundColor: "#f8f8f8",
        marginBottom: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        flexDirection: "row"
    },
    image: {
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        width: 100,
        height: 100,
    },
    detailView: {
        padding: 10,
        flexDirection: "row",
        flexGrow: .83,
        justifyContent: "space-between"
    },
    textMuted: {
        color: "#777"
    }
})