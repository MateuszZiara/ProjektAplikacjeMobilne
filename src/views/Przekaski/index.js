import * as React from "react";
import { Image } from "expo-image";
import {StyleSheet, View, Text, Pressable, Dimensions, ScrollView, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles"
import {Przekaski2View} from "../Przekaski2";

export function PrzekaskiView({ navigation }) {
  return (
      <ScrollView style={{ flex: 1 }}>
    <View style={styles.ekranPrzeksek}>
      <View style={[styles.headerEkranuPrzeksek, styles.sliderLayout]}>
        <View style={[styles.slider, styles.sliderLayout]}>
          <Image
            style={[styles.image2Icon, styles.image2IconLayout]}
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
        <View style={[styles.frameParent, styles.frameParentFlexBox]}>
          <View style={[styles.frameWrapper, styles.frameParentFlexBox]}>
            <View style={styles.appNameWrapper}>
              <View style={styles.appName}>
                <Text style={[styles.idealneNaSeans, styles.przekskiLayout]}>
                  Idealne na seans
                </Text>
                <Text style={[styles.przekski, styles.przekskiTypo]}>
                  Przekąski
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.vectorWrapper, styles.frameParentFlexBox]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("./assets/ellipse-19.png")}
            />
          </View>
        </View>
      </View>
      <View
        style={[
          styles.iphonestatusbarOgranicznik,
          styles.iphonestatusbarPosition,
        ]}
      >

      </View>
      <View style={styles.komponentPrzekskiParent}>
        <View style={[styles.komponentPrzekski, styles.komponentLayout]}>
          <View style={[styles.maskGroup, styles.maskGroupLayout]}>
            <Image
              style={[styles.image9Icon, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("./assets/image-9.png")}
            />
          </View>
          <LinearGradient
            style={[styles.wrapper, styles.komponentLayout]}
            locations={[0, 0.69]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
          >
            <Pressable style={[styles.pressable, styles.pressablePosition]} />
          </LinearGradient>
          <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
            <View>
              <Text style={[styles.ucztaWTrakcie, styles.dlaCiebieITypo]}>
                Uczta w trakcie seansu
              </Text>
              <Text style={[styles.przekski1, styles.textFlexBox]}>
                Przekąski
              </Text>
            </View>
            <View style={[styles.rightArrowWrapper, styles.frameParentFlexBox]}>
              <Image
                style={styles.rightArrowIcon}
                contentFit="cover"
                source={require("./assets/right-arrow.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.sliderNav}>
          <View style={[styles.view, styles.viewLayout]} />
          <View style={[styles.view1, styles.viewLayout]} />
          <View style={styles.curr} />
        </View>
        <View style={styles.sliderPrzekasek}>
          <TouchableOpacity onPress={() => navigation.navigate(Przekaski2View)}>
          <View style={styles.parentLayout}>
              <Text style={[styles.mayPopcorn, styles.maaKawaTypo]}>Mały popcorn</Text>
            <Image
              style={styles.pngitem48680922Icon}
              contentFit="cover"
              source={require("./assets/pngitem-4868092-2.png")}
            />
          </View>
          </TouchableOpacity>
          <View style={[styles.lodyOreoParent, styles.parentLayout]}>
            <Text style={[styles.lodyOreo, styles.maaKawaTypo]}>Lody Oreo</Text>
            <Image
              style={[styles.image10Icon, styles.image10IconPosition]}
              contentFit="cover"
              source={require("./assets/image-10.png")}
            />
          </View>
          <View style={[styles.lodyOreoParent, styles.parentLayout]}>
            <Text style={[styles.mayPopcorn, styles.maaKawaTypo]}>
              Duży popcorn
            </Text>
            <Image
              style={styles.pngitem48680921Icon}
              contentFit="cover"
              source={require("./assets/pngitem-4868092-1.png")}
            />
          </View>
          <View style={[styles.lodyOreoParent, styles.parentLayout]}>
            <Text style={[styles.maaKawa, styles.maaKawaPosition]}>
              Mała kawa
            </Text>
            <Image
              style={styles.image30Icon}
              contentFit="cover"
              source={require("./assets/image-30.png")}
            />
          </View>
        </View>
        <View style={styles.naszeKlasykiParent}>
          <Text style={[styles.naszeKlasyki, styles.przekskiTypo]}>
            Nasze klasyki
          </Text>
          <Text style={[styles.dlaCiebieI, styles.dlaCiebieITypo]}>
            Dla ciebie i dla rodziny
          </Text>
        </View>
        <Pressable style={[styles.komponentPrzekski1, styles.komponentLayout]}>
          <LinearGradient
            style={[styles.komponentPrzekskiChild, styles.pressablePosition]}
            locations={[0, 0.69]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
          />
          <Image
            style={[styles.wrapper, styles.komponentLayout]}
            contentFit="cover"
            source={require("./assets/glowingspaceshiporbitsplanetstarrygalaxygeneratedbyai-1.png")}
          />
          <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
            <View>
              <Text style={[styles.ucztaWTrakcie, styles.dlaCiebieITypo]}>
                Ugaś pragnienie
              </Text>
              <Text style={[styles.przekski1, styles.textFlexBox]}>Napoje</Text>
            </View>
            <View style={[styles.rightArrowWrapper, styles.frameParentFlexBox]}>
              <Image
                style={styles.rightArrowIcon}
                contentFit="cover"
                source={require("./assets/right-arrow.png")}
              />
            </View>
          </View>
        </Pressable>
      </View>
    </View>
      </ScrollView>
  );
}


