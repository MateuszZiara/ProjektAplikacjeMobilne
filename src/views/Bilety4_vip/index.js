import * as React from "react";
import {Text, StyleSheet, View, ScrollView, FlatList, TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles";
import Movie from "../../Classes/Movie";
import {useEffect, useState} from "react";
import {Bilety3_vip} from "../Bilety3_vip";

export function Bilety4_vip({ navigation }) {
  const renderItem = ({ item }) => (
      <View style={styles.itemContainer}>
        <Text style={{ color: 'white' }}>{`${item.name} ${item.start} ${item.end}`}</Text>
        <Image
            style={styles.rightArrowIcon}
            contentFit="cover"
            source={require("./assets/right-arrow.png")}
        />
      </View>
  );
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call the function to refresh the FlatList
      refreshFlatList();
    });

    // Return the cleanup function to unsubscribe from the event
    return unsubscribe;
  }, [navigation, refresh]);

  // Function to refresh the FlatList
  const refreshFlatList = () => {
    // Toggle the state to force a re-render
    setRefresh((prevRefresh) => !prevRefresh);
  };
  return (
      <ScrollView style={{ flex: 1 }}>
    <View style={styles.wzr}>

      <View style={styles.wzrChild} />
      <View style={[styles.repertuarPosition]}>
        <View style={[styles.homeinactiveParent, styles.parentFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("./assets/homeinactive.png")}
          />
          <Image
            style={[styles.popcorninactiveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("./assets/popcorninactive.png")}
          />
          <Image
            style={[styles.popcorninactiveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("./assets/mask-group.png")}
          />
          <Image
            style={[styles.popcorninactiveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("./assets/mask-group1.png")}
          />
        </View>
      </View>
      <View style={[styles.headerEkranuPrzeksek, styles.sliderLayout]}>
        <View style={[styles.slider, styles.sliderLayout]}>
          <Image
            style={[styles.image2Icon, styles.image2IconLayout]}
            contentFit="cover"
            source={require("./assets/image-2.png")}
          />
          <LinearGradient
            style={[styles.sliderChild, styles.sliderBg]}
            locations={[0, 0.48, 1]}
            colors={[
              "rgba(0, 0, 0, 0.5)",
              "rgba(255, 255, 255, 0)",
              "rgba(0, 0, 0, 0.5)",
            ]}
          />
          <View style={styles.sliderItem} />
          <LinearGradient
            style={[styles.sliderInner, styles.sliderBg]}
            locations={[0.53, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
          />
        </View>
      </View>


      <View style={[styles.backParent, styles.parentFlexBox]}>
        <TouchableOpacity onPress={() =>navigation.navigate(Bilety3_vip)}>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("./assets/back.png")}
        />
        </TouchableOpacity>
        <View style={[styles.frameWrapper5, styles.frameWrapperFlexBox]}>
          <View style={styles.appNameWrapper}>
            <View style={[styles.appName, styles.appSpaceBlock]}>
              <Text style={[styles.ustawienia, styles.biletyLayout]}>
                Bilety
              </Text>
              <Text style={styles.ustawieniaKonta}>Rezerwacja</Text>
            </View>

          </View>

        </View>

      </View>
      <View style={styles.dynamiczneitemki}>

      </View>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.frameWrapper6, styles.frameWrapperFlexBox]}>
          <View style={styles.appNameContainer}>
            <View style={[styles.appName1, styles.appSpaceBlock]}>
              <Text style={[styles.dlaCiebieI, styles.biletyLayout]}>
                Dla ciebie i dla rodziny
              </Text>
              <Text style={[styles.bilety, styles.biletyLayout]}>Bilety</Text>
            </View>
          </View>
        </View>
        <View style={[styles.vectorWrapper, styles.parentFlexBox]}>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("./assets/ellipse-19.png")}
          />

        </View>

      </View>

      <View style={styles.dynamiczneitemki}>
        <FlatList
            key={refresh}
            data={Movie.array}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
      </View>

    </View>

      </ScrollView>
  );
}

