import React from "react";
import Carousel from 'react-native-snap-carousel';
import { StyleSheet, Dimensions } from "react-native";
import { Image } from "react-native-elements";
import pic1 from "../../assets/SliderImage/1.jpg";
import pic2 from "../../assets/SliderImage/2.jpg";
import pic3 from "../../assets/SliderImage/3.jpg";
import pic4 from "../../assets/SliderImage/4.jpg";
import pic5 from "../../assets/SliderImage/5.jpg";


const CarouselComp = () => {
    const { width } = Dimensions.get("window");
    const array = [pic2, pic1, pic3, pic4, pic5];
    const _renderItem = ({ item, index }) => {
        return (
            <Image key={index} style={{ width, height: 240 }} source={item} />
        );
    }

    return (
        <Carousel
            layout={"default"}
            data={array}
            renderItem={_renderItem}
            sliderWidth={width}
            itemWidth={width}
            swipeThreshold={100}
            layoutCardOffset={-12}
            inactiveSlideOpacity={0.4}
            autoplay={true}
            loop={true}
            activeAnimationType={"timing"}
            containerCustomStyle={{
                overflow: "visible",
                marginVertical: 14
            }}
            contentContainerCustomStyle={{
                paddingTop: 5
            }}
        />
    );
}

export default CarouselComp;

const styles = StyleSheet.create({

})