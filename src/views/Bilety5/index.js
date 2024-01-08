import * as React from "react";
import { Image } from "expo-image";
import {View, Text } from "react-native";
import {styles} from "./styles";
import {Bilety4_vip} from "../Bilety4_vip";
import { LinearGradient } from "expo-linear-gradient";
import {UserAvatar} from "../../components/UserAvatar";

export function Bilety5({ navigation }){

  //TODO zostawiam tu stałe, flatlista do zrobienia

  return (
    <View style={styles.siedzenia}>
      <View style={styles.headerEkranuPrzeksek}>
        <View style={styles.slider}>
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
          <View style={styles.sliderItem} />
          <LinearGradient
            style={[styles.sliderInner, styles.sliderBg]}
            locations={[0.53, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
          />
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={[styles.frameParent, styles.parentFrameFlexBox]}>
          <View style={styles.frameGroup}>
            <View style={styles.garyLeeParent}>
              <Text style={[styles.garyLee, styles.garyFlexBox]}>
                American Psycho
              </Text>
              <Text style={[styles.d, styles.dTypo]}>2D</Text>
              <Text style={[styles.napisy, styles.dTypo]}>napisy</Text>
            </View>
            <Text style={[styles.garyLee1, styles.textTypo]}>Sala 5</Text>
          </View>
          <Text style={[styles.text, styles.textTypo]}>12:30</Text>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={styles.frameChild} />
          <View style={[styles.frameParent, styles.parentFrameFlexBox]}>
            <View style={styles.frameView}>
              <View style={styles.garyLeeParent}>
                <Text style={[styles.garyLee, styles.garyFlexBox]}>
                  American Psycho
                </Text>
                <Text style={[styles.d, styles.dTypo]}>2D</Text>
                <Text style={[styles.napisy, styles.dTypo]}>lektor</Text>
              </View>
              <Text style={[styles.garyLee1, styles.textTypo]}>Sala 5</Text>
            </View>
            <Text style={[styles.text, styles.textTypo]}>15:30</Text>
          </View>
        </View>
        <View style={styles.rectangleContainer}>
          <View style={styles.frameChild} />
          <View style={[styles.frameParent, styles.parentFrameFlexBox]}>
            <View style={styles.frameView}>
              <View style={styles.garyLeeParent}>
                <Text style={[styles.garyLee, styles.garyFlexBox]}>
                  American Psycho
                </Text>
                <Text style={[styles.d, styles.dTypo]}>2D</Text>
                <Text style={[styles.napisy, styles.dTypo]}>napisy</Text>
              </View>
              <Text style={[styles.garyLee1, styles.textTypo]}>Sala 6</Text>
            </View>
            <Text style={[styles.text, styles.textTypo]}>19:30</Text>
          </View>
        </View>
        <View style={styles.rectangleParent1}>
          <View style={styles.frameChild} />
          <View style={[styles.frameParent, styles.parentFrameFlexBox]}>
            <View style={styles.frameView}>
              <View style={styles.garyLeeParent}>
                <Text style={[styles.garyLee, styles.garyFlexBox]}>
                  American Psycho
                </Text>
                <Text style={[styles.d, styles.dTypo]}>2D</Text>
                <Text style={[styles.dubbing, styles.dTypo]}>dubbing</Text>
              </View>
              <Text style={[styles.garyLee1, styles.textTypo]}>Sala 6</Text>
            </View>
            <Text style={[styles.text, styles.textTypo]}>21:00</Text>
          </View>
        </View>
      </View>
      <View style={styles.siedzeniaChild} />
      <View style={[styles.backParent, styles.parentFrameFlexBox]}>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("./assets/back.png")}
        />
        <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
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
      <View style={[styles.frameParent5, styles.parentFrameFlexBox]}>
        <View style={[styles.frameWrapper1, styles.frameWrapperFlexBox]}>
          <View style={styles.appNameContainer}>
            <View style={[styles.appName1, styles.appSpaceBlock]}>
              <Text style={[styles.dlaCiebieI, styles.biletyLayout]}>
                Dla ciebie i dla rodziny
              </Text>
              <Text style={[styles.bilety, styles.biletyLayout]}>Bilety</Text>
            </View>
          </View>
        </View>
        <View style={{left:-5}}>
          <UserAvatar style={{zIndex: '0'}} navigation={navigation} />
        </View>
      </View>
    </View>
  );
}
