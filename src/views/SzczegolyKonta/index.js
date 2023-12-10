import * as React from "react";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "./styles.js";
import {styles} from "./styles";
import {Text, StyleSheet, View, TouchableOpacity, ScrollView, TouchableWithoutFeedback} from "react-native";

export function SzczegolyKonta({ navigation }) {
  return (
    <View style={styles.wzr}>
      <View
        style={[
          styles.iphonestatusbarOgranicznik,
          styles.iphonestatusbarPosition,
        ]}
      >
        <View style={[styles.iphonestatusbar, styles.parentWrapperFlexBox]}>
          <Text style={styles.text}>9.41</Text>
          <View style={[styles.signalParent, styles.parentWrapperFlexBox]}>
            <Image
              style={styles.signalIcon}
              contentFit="cover"
              source={require("./assets/signal.png")}
            />
            <Image
              style={styles.wiFiIcon}
              contentFit="cover"
              source={require("./assets/wifi.png")}
            />
            <Image
              style={styles.fullBatteryIcon}
              contentFit="cover"
              source={require("./assets/full-battery.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.navigationBar, styles.navigationBarLayout]}>
        <View style={[styles.homeinactiveParent, styles.frameViewPosition]}>
          <Image
            style={styles.pencilIconLayout}
            contentFit="cover"
            source={require("./assets/homeinactive.png")}
          />
          <Image
            style={[styles.popcorninactiveIcon, styles.pencilIconLayout]}
            contentFit="cover"
            source={require("./assets/popcorninactive.png")}
          />
          <Image
            style={[styles.popcorninactiveIcon, styles.pencilIconLayout]}
            contentFit="cover"
            source={require("./assets/mask-group.png")}
          />
          <Image
            style={[styles.popcorninactiveIcon, styles.pencilIconLayout]}
            contentFit="cover"
            source={require("./assets/mask-group1.png")}
          />
        </View>
        <View style={[styles.iphoneIndicator, styles.navigationBarLayout]}>
          <View style={styles.line} />
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.backParent, styles.parentWrapperFlexBox]}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('UstawieniaView')}>
                <Image
                    style={styles.backIcon}
                    contentFit="cover"
                    source={require("./assets/back.png")}
                />
            </TouchableWithoutFeedback>
          <View style={[styles.frameWrapper, styles.parentWrapperFlexBox]}>
            <View style={styles.appNameWrapper}>
              <View style={styles.appName}>
                <Text style={[styles.ustawienia, styles.garyLeeTypo]}>
                  Ustawienia konta
                </Text>
                <Text style={styles.ustawieniaKonta}>Szczegóły Profilu</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.groupWrapper}>
            <View style={styles.groupParent}>
              <View style={styles.frameContainer}>
                <View
                  style={[styles.vectorWrapper, styles.parentWrapperFlexBox]}
                >
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("./assets/ellipse-19.png")}
                  />
                </View>
              </View>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("./assets/ellipse-78.png")}
              />
              <Image
                style={[styles.pencilIcon, styles.groupChildLayout]}
                contentFit="cover"
                source={require("./assets/pencil.png")}
              />
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameItem} />
            <View style={[styles.frameView, styles.frameViewPosition]}>
              <View style={styles.garyLeeParent}>
                <Text style={[styles.garyLee, styles.garyLeeTypo]}>
                  Nazwa urzytkownika
                </Text>
                <Text style={[styles.garyLee1, styles.garyTypo]}>
                  Agnieszka Kowal
                </Text>
              </View>
              <Image
                style={[styles.pencilIcon1, styles.pencilIconLayout]}
                contentFit="cover"
                source={require("./assets/pencil1.png")}
              />
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameItem} />
            <View style={[styles.frameView, styles.frameViewPosition]}>
              <View style={styles.garyLeeParent}>
                <Text style={[styles.garyLee, styles.garyLeeTypo]}>HasĹ‚o</Text>
                <Text style={[styles.garyLee3, styles.garyTypo]}>
                  **********
                </Text>
              </View>
              <Image
                style={[styles.pencilIcon1, styles.pencilIconLayout]}
                contentFit="cover"
                source={require("./assets/pencil1.png")}
              />
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameItem} />
            <View style={[styles.frameView, styles.frameViewPosition]}>
              <View style={styles.garyLeeParent}>
                <Text style={[styles.garyLee, styles.garyLeeTypo]}>Email</Text>
                <Text style={[styles.garyLee5, styles.garyTypo]}>
                  agnieszkakowal@gmail.com
                </Text>
              </View>
              <Image
                style={[styles.pencilIcon3, styles.pencilIconLayout]}
                contentFit="cover"
                source={require("./assets/pencil1.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
