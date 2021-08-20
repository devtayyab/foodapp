import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import Header from '../Header/Header';
import Pic from "../../assets/SliderImage/2.jpg";
import Form from './Form';

const Profile = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header navigation={navigation} component="Profile" />
            <ScrollView>
                <View style={styles.profile}>
                    <Image source={Pic} style={{ width: 100, height: 100, borderRadius: 50 }} />
                    <Text style={{ color: "white", fontSize: 25, marginTop: 5 }}>Muhammad Ibtisam</Text>
                    <Text style={{ color: "white", fontSize: 15, marginTop: 5 }}>Shahkot, Pakistan</Text>
                </View>
                <Form />
            </ScrollView>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    profile: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 25,
        backgroundColor: "#bad759",
        borderTopColor: "white",
        borderWidth: 1,
        borderBottomColor: "#bad759",
        borderLeftColor: "#bad759",
        borderRightColor: "#bad759",
    }
})