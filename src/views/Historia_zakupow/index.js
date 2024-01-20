import * as React from "react";
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles";
import {Bilety1} from "../Bilety1";
import {UstawieniaView} from "../Ustawienia";
import {NavigationContainer} from "@react-navigation/native";
import TabNav from "../../navigation/Tab";
export function Historia_zakupow({ navigation }){
  return (
      <NavigationContainer independent={true}>
        <View style={{ flex: 1 }}>
      <ScrollView>
      <View style={styles.wzr}>
      <View style={[styles.wzrInner, styles.wzrInnerPosition]}>
        <View>
          <View>
            <View style={styles.frameChild} />
            <View style={[styles.frameGroup, styles.frameFlexBox]}>
              <View style={styles.garyLeeParent}>
                <Text style={[styles.garyLee, styles.garyLeeTypo]}>
                  03.11.2023
                </Text>
                <Text style={styles.garyLee1}>19:30</Text>
              </View>
              <View style={[styles.rightArrowWrapper, styles.rightLayout]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={styles.frameChild} />
            <View style={[styles.frameGroup, styles.frameFlexBox]}>
              <View style={styles.garyLeeParent}>
                <Text style={[styles.garyLee, styles.garyLeeTypo]}>
                  01.11.2023
                </Text>
                <Text style={[styles.garyLee3, styles.garyTypo]}>20:00</Text>
              </View>
              <View style={[styles.rightArrowWrapper, styles.rightLayout]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={styles.frameChild} />
            <View style={[styles.frameGroup, styles.frameFlexBox]}>
              <View style={styles.garyLeeParent}>
                <Text style={[styles.garyLee, styles.garyLeeTypo]}>
                  20.10.2023
                </Text>
                <Text style={[styles.garyLee5, styles.garyTypo]}>14:00</Text>
              </View>
              <View style={[styles.rightArrowFrame, styles.rightLayout]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={styles.frameChild} />
            <View style={[styles.frameGroup, styles.frameFlexBox]}>
              <View style={styles.garyLeeParent}>
                <Text style={[styles.garyLee, styles.garyLeeTypo]}>
                  13.04.2023
                </Text>
                <Text style={[styles.garyLee5, styles.garyTypo]}>21:45</Text>
              </View>
              <View style={[styles.rightArrowFrame, styles.rightLayout]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={styles.frameChild} />
            <View style={[styles.frameGroup, styles.frameFlexBox]}>
              <View style={styles.garyLeeParent}>
                <Text style={[styles.garyLee, styles.garyLeeTypo]}>
                  10.04.2023
                </Text>
                <Text style={[styles.garyLee5, styles.garyTypo]}>15:45</Text>
              </View>
              <View style={[styles.rightArrowFrame, styles.rightLayout]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={styles.frameChild} />
            <View style={[styles.frameGroup, styles.frameFlexBox]}>
              <View style={styles.garyLeeParent}>
                <Text style={[styles.garyLee, styles.garyLeeTypo]}>
                  02.11.2022
                </Text>
                <Text style={[styles.garyLee5, styles.garyTypo]}>21:45</Text>
              </View>
              <View style={[styles.rightArrowFrame, styles.rightLayout]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={styles.frameChild} />
            <View style={[styles.frameGroup, styles.frameFlexBox]}>
              <View style={styles.garyLeeParent}>
                <Text style={[styles.garyLee, styles.garyLeeTypo]}>
                  13.09.2022
                </Text>
                <Text style={[styles.garyLee5, styles.garyTypo]}>11:30</Text>
              </View>
              <View style={[styles.rightArrowFrame, styles.rightLayout]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <LinearGradient
        style={styles.wzrChild}
        locations={[0, 0.74, 1]}
        colors={[
          "rgba(0, 0, 0, 0.73)",
          "rgba(0, 0, 0, 0.91)",
          "rgba(0, 0, 0, 0)",
        ]}
      />
      <View style={styles.wzrItem} />
      <View style={[styles.backParent, styles.frameFlexBox]}>
        <TouchableOpacity onPress={() => navigation.navigate(UstawieniaView)}>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("./assets/back.png")}
        />
        </TouchableOpacity>
        <View style={[styles.frameWrapper, styles.frameFlexBox]}>
          <View style={styles.appNameWrapper}>
            <View style={styles.appName}>
              <Text style={[styles.ustawienia, styles.ustawieniaClr]}>
                Ustawienia konta
              </Text>
              <Text style={[styles.ustawieniaKonta, styles.ustawieniaClr]}>
                Historia zakupów
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
      </ScrollView>
          <View style={{marginBottom: 47}}>
            <TabNav navigation={navigation} />
          </View>

        </View>
      </NavigationContainer>
  );
};
