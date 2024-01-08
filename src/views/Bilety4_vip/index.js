import * as React from "react";
import {Text, StyleSheet, View, ScrollView, FlatList, TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles";
import Movie from "../../Classes/Movie";
import {useEffect, useState} from "react";
import {Bilety3_vip} from "../Bilety3_vip";
import TicketToBuy from "../../Classes/TicketToBuy";
import Cart from "../../Classes/Cart";
import {Home} from "../Home";
import {UserAvatar} from "../../components/UserAvatar";
import {Bilety5} from "../Bilety5";
export function Bilety4_vip({ navigation }) {
  function addToCart(item)
  {
    let contains = false;
    TicketToBuy.time = item.start + " - " + item.end;
    console.log(TicketToBuy.time);
    TicketToBuy.name = item.name;
    let check = TicketToBuy.name + " " + TicketToBuy.time;
    for(let i = 0; i < Cart.array.length; ++i)
    {

      if(Cart.array[i].id === TicketToBuy.id && Cart.array[i].name === check)
      {
        contains = true;
        Cart.array[i].amount += TicketToBuy.number;
      }
    }
    if(contains === false) {
      if (TicketToBuy.id === 1) {
        Cart.array.push({
          id: TicketToBuy.id,
          img: require("./assets/mask-group.png"),
          amount: TicketToBuy.number,
          name: TicketToBuy.name + " " + TicketToBuy.time
        })
      }
      if (TicketToBuy.id === 2) {
        Cart.array.push({
          id: TicketToBuy.id,
          img: require("./assets/mask-group1.png"),
          amount: TicketToBuy.number,
          name: TicketToBuy.name + " " + TicketToBuy.time
        })
      }
      if (TicketToBuy.id === 3) {
        Cart.array.push({
          id: TicketToBuy.id,
          img: require("./assets/mask-group2.png"),
          amount: TicketToBuy.number,
          name: TicketToBuy.name + " " + TicketToBuy.time
        })
      }
      if (TicketToBuy.id === 4) {
        Cart.array.push({
          id: TicketToBuy.id,
          img: require("./assets/mask-group3.png"),
          amount: TicketToBuy.number,
          name: TicketToBuy.name + " " + TicketToBuy.time
        })
      }
    }
    navigation.navigate(Bilety5)
  }
  const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => addToCart(item)}>
      <View style={styles.itemContainer}>
        <Text style={{ color: 'white' }}>{`${item.name} ${item.start} ${item.end}`}</Text>
        <Image
            style={styles.rightArrowIcon}
            contentFit="cover"
            source={require("./assets/right-arrow.png")}
        />
      </View>
      </TouchableOpacity>
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
        <View style={{left:-10}}>
          <UserAvatar style={{zIndex: '0'}} navigation={navigation} />
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

