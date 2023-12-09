import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {styles} from "./styles"
import {Bilety3_vip} from "../Bilety3_vip";
import {Calendar} from "react-native-calendars";
import {useState} from "react";

export function Bilety2_vip({ navigation }) {
  return (
      <ScrollView style={{ flex: 1 }}>
    <View style={styles.wzr}>

      <View style={[styles.headerEkranuPrzeksek, styles.sliderLayout]}>
        <View style={[styles.slider, styles.sliderLayout]}>
          <Image
            style={[styles.image2Icon, styles.image2IconPosition]}
            contentFit="cover"
            source={require("./assets/image-2.png")}
          />
          <LinearGradient
            style={[styles.sliderChild, styles.image2IconPosition]}
            locations={[0, 0.48, 1]}
            colors={[
              "rgba(0, 0, 0, 0.5)",
              "rgba(255, 255, 255, 0)",
              "rgba(0, 0, 0, 0.5)",
            ]}
          />
          <View style={styles.sliderItem} />
          <LinearGradient
            style={styles.sliderInner}
            locations={[0.53, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
          />
        </View>
      </View>
      <View
        style={[
          styles.iphonestatusbarOgranicznik,
          styles.iphonestatusbarPosition,
        ]}
      >
        <View style={[styles.iphonestatusbar, styles.iphonestatusbarPosition]}>
          <Text style={[styles.text, styles.textFlexBox]}>9.41</Text>
          <View style={styles.signalParent}>
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
      <View style={[styles.biletVipParent, styles.parentBg]}>
        <Text style={[styles.biletVip, styles.zTypo]}>Bilet VIP</Text>
        <Text style={[styles.z, styles.zTypo]}>35 zł</Text>
        <Image
          style={styles.maskGroupIcon2}
          contentFit="cover"
          source={require("./assets/mask-group2.png")}
        />
        <View style={[styles.parent, styles.parentBg]}>
          <View style={styles.view}>
            <LinearGradient
              style={[styles.child, styles.childPosition]}
              locations={[0, 1]}
              colors={["rgba(252, 252, 252, 0.2)", "rgba(123, 122, 122, 0.2)"]}
            />
            <Text style={[styles.text1, styles.textTypo]}>-</Text>
          </View>
          <View style={[styles.counter, styles.view1ShadowBox]}>
            <View style={[styles.counterChild, styles.childPosition]} />
            <Text style={[styles.text2, styles.textTypo]}>1</Text>
          </View>
          <View style={[styles.view1, styles.view1ShadowBox]}>
            <LinearGradient
              style={[styles.child, styles.childPosition]}
              locations={[0, 1]}
              colors={["rgba(136, 243, 28, 0.2)", "rgba(82, 158, 5, 0.2)"]}
            />
            <Text style={[styles.text3, styles.textTypo]}>+</Text>
          </View>
        </View>
      </View>
      <View style={styles.backParent}>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("./assets/back.png")}
        />
        <View style={[styles.frameWrapper, styles.frameFlexBox]}>
          <View style={styles.appNameWrapper}>
            <View style={[styles.appName, styles.appSpaceBlock]}>
              <Text style={[styles.ustawienia, styles.ustawieniaClr]}>
                Bilety
              </Text>
              <Text style={[styles.ustawieniaKonta, styles.biletyTypo]}>
                VIP
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.appNameContainer}>
            <View style={[styles.appName1, styles.appSpaceBlock]}>
              <Text style={[styles.dlaCiebieI, styles.garyLeeTypo]}>
                Dla ciebie i dla rodziny
              </Text>
              <Text style={[styles.bilety, styles.biletyTypo]}>Bilety</Text>
            </View>
          </View>
        </View>
        <View style={styles.vectorWrapper}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("./assets/ellipse-19.png")}
          />
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.frameItem} />
        <View style={styles.garyLeeParent}>
          <Text style={[styles.garyLee, styles.garyLeeTypo]} onPress={() => navigation.navigate(Bilety3_vip)}>Wybierz seans</Text>



          <Image
            style={[styles.maskGroupIcon3, styles.iconLayout]}
            contentFit="cover"
            source={require("./assets/mask-group3.png")}
          />
        </View>
      </View>
    </View>
      </ScrollView>
  );
}


