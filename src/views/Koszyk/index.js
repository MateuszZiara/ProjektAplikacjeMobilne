import * as React from "react";
import { Image } from "expo-image";
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles";
import {Bilety2_vip} from "../Bilety2_vip";
import {Home} from "../Home";
import Cart from "../../Classes/Cart";

export function Koszyk({ navigation }){
  const renderItem = ({ item }) => (
      <View >
        <Image source={

        } />
        <Text style={
          {
            color: 'white',
          }
        }>{`ID: ${item.id}, Count: ${item.amount}`}</Text>
      </View>
  );
  return (
      <ScrollView>
    <View style={[styles.wzr, styles.wzrLayout]}>

      <View style={styles.groupParent}>
        <View
          style={[styles.headerEkranuPrzeksekParent, styles.headerPosition]}
        >
          <View style={[styles.headerEkranuPrzeksek, styles.headerPosition]}>
            <View style={[styles.headerEkranuPrzeksek, styles.headerPosition]}>
              <Image
                style={[styles.image2Icon, styles.image2IconPosition]}
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
              <View style={[styles.sliderItem, styles.sliderItemPosition]} />
              <LinearGradient
                style={[styles.sliderInner, styles.sliderBg]}
                locations={[0.53, 1]}
                colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
              />
            </View>
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={[styles.frameWrapper, styles.frameParentFlexBox]}>
                <View style={styles.appNameWrapper}>
                  <View style={[styles.appName, styles.appSpaceBlock]}>
                    <Text style={[styles.twojeKonto, styles.zamwienieLayout]}>
                      Twoje konto
                    </Text>
                    <Text style={[styles.zamwienie, styles.zamwienieLayout]}>
                      Zamówienie
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.frameContainer}>
                <View style={[styles.vectorWrapper, styles.frameParentFlexBox]}>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("./assets/ellipse-19.png")}
                  />
                </View>
              </View>
            </View>

          </View>


          <View style={[styles.backParent, styles.frameParentFlexBox]}>
            <TouchableOpacity onPress={() =>navigation.navigate(Home)}>
            <Image
              style={styles.backIcon}
              contentFit="cover"
              source={require("./assets/back.png")}
            />
            </TouchableOpacity>

            <View style={[styles.frameView, styles.frameParentFlexBox]}>
              <View style={styles.appNameContainer}>
                <View style={[styles.appName1, styles.appSpaceBlock]}>
                  <Text
                    style={[styles.zamwienie1, styles.garyLeeTypo]}
                  >{`Zamówienie`}</Text>
                  <Text style={styles.ustawieniaKonta}>Koszyk</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{
        marginTop: 300,
      }}>
        <FlatList
            data={Cart.array}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
      </ScrollView>
  );
}

