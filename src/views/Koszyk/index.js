import * as React from "react";
import { Image } from "expo-image";
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles";
import {Bilety2_vip} from "../Bilety2_vip";
import {Home} from "../Home";

export function Koszyk({ navigation }){
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
        <View style={styles.zestaw}>
          <View style={[styles.duyPopcornParent, styles.parentLayout]}>
            <Text style={[styles.duyPopcorn, styles.xFlexBox]}>
              Duży popcorn
            </Text>
            <Text style={[styles.z, styles.zTypo]}>18 zł</Text>
            <Image
              style={[
                styles.closeUpDeliciousSaltedPopcIcon,
                styles.parentPosition,
              ]}
              contentFit="cover"
              source={require("./assets/closeupdelicioussaltedpopcornreadybeservedtransformed-1.png")}
            />
            <View style={styles.ellipseParent}>
              <Image
                style={[styles.groupChild, styles.childLayout]}
                contentFit="cover"
                source={require("./assets/ellipse-79.png")}
              />
              <Text style={[styles.x, styles.zTypo]}>2x</Text>
            </View>
          </View>
          <View style={[styles.biletUlgowyParent, styles.parentLayout]}>
            <Text style={[styles.biletUlgowy, styles.xFlexBox]}>
              Bilet Ulgowy
            </Text>
            <Text style={[styles.z1, styles.zTypo]}>18 zł</Text>
            <Image
              style={styles.maskGroupIcon2}
              contentFit="cover"
              source={require("./assets/mask-group2.png")}
            />
            <Text style={[styles.z, styles.zTypo]}>16 zł</Text>
          </View>
          <View style={[styles.biletUlgowyParent, styles.parentLayout]}>
            <Text style={[styles.biletUlgowy, styles.xFlexBox]}>
              Duży napój
            </Text>
            <Text style={[styles.z1, styles.zTypo]}>18 zł</Text>
            <Image
              style={styles.image28Icon}
              contentFit="cover"
              source={require("./assets/image-28.png")}
            />
            <Text style={[styles.z, styles.zTypo]}>18 zł</Text>
          </View>
          <View style={styles.vectorParent}>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("./assets/line-1.png")}
            />
            <Text style={[styles.z5, styles.z5Typo]}>52 zł</Text>
            <Text style={[styles.doZapaty, styles.z5Typo]}>Do zapłaty:</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.sliderItemPosition]}>
        <View style={styles.frameItem} />
        <View style={[styles.maskGroupParent, styles.frameParentFlexBox]}>
          <Image
            style={styles.maskGroupIcon3}
            contentFit="cover"
            source={require("./assets/mask-group3.png")}
          />
          <Text style={[styles.garyLee, styles.garyLeeTypo]}>
            Przejdź do Płatności
          </Text>
        </View>
      </View>
    </View>
      </ScrollView>
  );
}

