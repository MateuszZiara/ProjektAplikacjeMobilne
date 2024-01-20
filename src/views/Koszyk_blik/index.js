import * as React from "react";
import { Image } from "expo-image";
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles";
import {Koszyk_platnosc} from "../Koszyk_platnosc";
import {Zatwierdz_platnosc} from "../Zatwierdz_platnosc";
import {UserAvatar} from "../../components/UserAvatar";

export function Koszyk_blik({ navigation }){
  return (
      <ScrollView>
    <View style={[styles.wzr, styles.wzrLayout]}>
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
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={[styles.frameWrapper, styles.frameFlexBox]}>
            <View style={styles.appNameWrapper}>
              <View style={[styles.appName, styles.appSpaceBlock]}>
                <Text style={[styles.twojeKonto, styles.zamwienieLayout]}>
                  Twoje konto
                </Text>
                <Text style={[styles.zamwienie, styles.textTypo]}>
                  Zamówienie
                </Text>
              </View>
            </View>
          </View>


            <View style={styles.gb}>
              <UserAvatar  navigation={navigation} />
            </View>

        </View>
      </View>
      <View style={[styles.backParent, styles.parentFlexBox]}>
        <TouchableOpacity onPress={() =>navigation.navigate(Koszyk_platnosc)}>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("./assets/back.png")}
        />
        </TouchableOpacity>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.appNameContainer}>
            <View style={[styles.appName1, styles.appSpaceBlock]}>
              <Text
                style={[styles.zamwienie1, styles.zamwienieLayout]}
              >{`Zamówienie
`}</Text>
              <Text style={[styles.ustawieniaKonta, styles.textTypo]}>
                Płatności
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.patnoKartGotwkaPrzyContainer, styles.oOOOTypo]}>
        <Text style={styles.patnoKartGotwkaPrzyContainer1}>
          <Text style={styles.patnoKart}>Płatność kartą </Text>
          <Text style={styles.patnoKart}>Gotówka przy kasie </Text>
          <Text style={styles.blik}>BLIK                            </Text>
        </Text>
      </Text>

      <View style={[styles.rectangleParent, styles.textPosition]}>
        <View style={styles.frameItem} />
        <View style={[styles.maskGroupParent, styles.parentFlexBox]}>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require("./assets/mask-group.png")}
          />
          <TouchableOpacity onPress={() =>navigation.navigate(Zatwierdz_platnosc)}>
          <Text style={[styles.garyLee, styles.garyLeeTypo]}>
            Zatwierdź płatność
          </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.input, styles.textPosition]}>
        <View style={styles.inputLayout} />
        <View style={[styles.inputItem, styles.inputLayout]} />
        <View style={[styles.inputItem, styles.inputLayout]} />
        <View style={[styles.inputItem, styles.inputLayout]} />
        <View style={[styles.inputItem, styles.inputLayout]} />
        <View style={[styles.inputItem, styles.inputLayout]} />
      </View>
      <Text style={[styles.wprowadPowyejKod, styles.garyLeeTypo]}>
        Wprowadź powyżej kod BLIK
      </Text>
    </View>
      </ScrollView>
  );
}




