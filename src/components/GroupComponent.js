import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import GroupComponent from "GroupComponent";

const GroupComponent = ({ style }) => {
  const [groupCarouselItems, setGroupCarouselItems] = useState([
    <GroupComponent />,
  ]);

  return (
    <View style={[styles.parent, style]}>
      <Carousel
        style={styles.carousel}
        width
        height
        vertical={true}
        mode="normal"
        autoPlay={false}
        loop={true}
        data={groupCarouselItems}
        renderItem={({ item }) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    width: 635.3427124023438,
    height: 543,
  },
  parent: {
    width: 635,
    height: 543,
  },
});

export default GroupComponent;
