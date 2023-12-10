import * as React from "react";
import { Image } from "expo-image";
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles";

import {Koszyk_platnosc} from "../Koszyk_platnosc";
import {Home} from "../Home";
import Cart from "../../Classes/Cart";
import {useEffect, useState} from "react";

export function Koszyk({ navigation }){
  const renderItem = ({ item }) => (
      <View>
        <Image source={item.img}  contentFit="cover" style={{height: 100, width: 100}}/>
        <Text style={{ color: 'white' }}>{`ID: ${item.id}, Count: ${item.amount}`}</Text>
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
                      >{`Zamówienie
`}</Text>
                      <Text style={styles.ustawieniaKonta}>Koszyk</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{
              marginTop: 300,
            }}>
              <FlatList
                  key={refresh} // Key is updated to force a re-render
                  data={Cart.array}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id.toString()}
              />


            </View>
      </View>
          <View style={[styles.rectangleParent, styles.sliderItemPosition]}>
            <View style={styles.frameItem} />
            <View style={[styles.maskGroupParent, styles.frameParentFlexBox]}>
              <TouchableOpacity onPress={() =>navigation.navigate(Koszyk_platnosc)}>
              <Image
                  style={styles.maskGroupIcon3}
                  contentFit="cover"
                  source={require("./assets/mask-group3.png")}
              />
              <Text style={[styles.garyLee, styles.garyLeeTypo]}>
                Przejdź do Płatności
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
  );
}



