import * as React from "react";
import { Image } from "expo-image";
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles";
import {Koszyk_blik} from "../Koszyk_blik";
import {Koszyk} from "../Koszyk";
import {Koszyk_karta} from "../Koszyk_karta";
import {Koszyk_gotowka} from "../Koszyk_gotowka";
export function Koszyk_platnosc({ navigation }){
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
          <View style={styles.koszykParent}>
            <View style={[styles.koszyk, styles.koszykLayout]}>

            </View>
            <View style={[styles.vectorWrapper, styles.parentFlexBox]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("./assets/ellipse-19.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.backParent, styles.parentFlexBox]}>
        <TouchableOpacity onPress={() =>navigation.navigate(Koszyk)}>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("./assets/back.png")}
        />
        </TouchableOpacity>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.appNameContainer}>
            <View style={[styles.appName1, styles.appSpaceBlock]}>
              <Text style={[styles.zamwienie1, styles.garyLeeTypo]}>{`Zamówienie
`}</Text>
              <Text style={[styles.ustawieniaKonta, styles.textTypo]}>
                Płatności
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.appName2, styles.textPosition]}>
        <Text style={styles.zamwienie2}>
          {`Nie została podpięta `}
          {`żadna karta płatnicza. `}Dodaj ją poniżej.
        </Text>
      </View>
      <Text style={[styles.patnoKartGotwkaPrzyContainer, styles.oOOOTypo]}>

          <Text style={styles.patnoKart} onPress={() =>navigation.navigate(Koszyk_karta)}>Płatność kartą </Text>

          <Text style={styles.gotwkaPrzyKasie} onPress={() =>navigation.navigate(Koszyk_gotowka)}>Gotówka przy kasie </Text>

          <Text style={styles.blik} onPress={() =>navigation.navigate(Koszyk_blik)}>BLIK                          </Text>


      </Text>
      <Text style={[styles.oOOO, styles.oOOOTypo]}>

      </Text>
      <View style={[styles.rectangleParent, styles.textPosition]}>
        <View style={styles.frameItem} />
        <TouchableOpacity style={[styles.maskGroupParent, styles.parentFlexBox]}
                          onPress={() => navigation.navigate(Koszyk_karta)}>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require("./assets/mask-group.png")}
          />
          <Text style={[styles.garyLee, styles.garyLeeTypo]}>
            Dodaj kartę płatniczą
          </Text>
        </TouchableOpacity>
      </View>
    </View>
      </ScrollView>
  );
}
