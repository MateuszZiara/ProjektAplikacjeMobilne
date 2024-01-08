import * as React from "react";
import { Image } from "expo-image";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles";
import {Bilety4_vip} from "../Bilety4_vip";
import {Gotowka_przetwarzanie} from "../Gotowka_przetwarzanie";


export function Koszyk_gotowka({ navigation }){
  return (
    <View style={styles.wzr}>
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
        <View style={[styles.headerEkranuPrzeksekInner, styles.parentFlexBox]}>
          <View style={[styles.frameWrapper, styles.frameFlexBox]}>
            <View style={styles.appNameWrapper}>
              <View style={[styles.appName, styles.appSpaceBlock]}>
                <Text style={[styles.twojeKonto, styles.zamwienieLayout]}>
                  Twoje konto
                </Text>
                <Text style={[styles.zamwienie, styles.zamwienieTypo]}>
                  Zamówienie
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.backParent, styles.parentFlexBox]}>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("./assets/back.png")}
        />
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.appNameContainer}>
            <View style={[styles.appName1, styles.appSpaceBlock]}>
              <Text style={[styles.zamwienie1, styles.garyLeeTypo]}>{`Zamówienie
`}</Text>
              <Text style={[styles.ustawieniaKonta, styles.zamwienieTypo]}>
                Płatności
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.patnoKartGotwkaPrzyContainer, styles.parentFlexBox]}>
        <Text style={styles.patnoKartGotwkaPrzyContainer1}>
          <Text style={styles.patnoKart}>Płatność kartą</Text>
          <Text style={styles.gotwkaPrzyKasie}>Gotówka przy kasie</Text>
          <Text style={styles.patnoKart}>BLIK</Text>
        </Text>
      </Text>
      <View style={[styles.rectangleParent, styles.zamwienie2Position]}>
        <View style={styles.frameChild} />
        <View style={[styles.maskGroupParent, styles.parentFlexBox]}>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require("./assets/mask-group.png")}
          />
          <TouchableOpacity onPress={() =>navigation.navigate(Gotowka_przetwarzanie)}>
          <Text style={[styles.garyLee, styles.garyLeeTypo]}>
            Zatwierdź płatność
          </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.zamwienie2, styles.zamwienie2Position]}>
        <Text
          style={styles.twojeKontoTypo}
        >{`Do momentu zapłaty status zamówienia będzie jako `}</Text>
        <Text style={styles.zamwienieTypo}>przetwarzany</Text>
        <Text style={styles.twojeKontoTypo}>.</Text>
      </Text>
    </View>
  );
};