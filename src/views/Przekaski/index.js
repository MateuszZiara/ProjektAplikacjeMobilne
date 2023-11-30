import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Border, FontSize, Padding } from "./styles";


export function PrzekaskiView({ navigation }) {
  return (
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
        <View style={[styles.iphonestatusbar, styles.iphonestatusbarPosition]}>
          <Text style={[styles.text, styles.textFlexBox]}>9.41</Text>
          <View style={[styles.signalParent, styles.frameParentFlexBox]}>
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
          <View style={styles.parentLayout}>
            <Text style={[styles.mayPopcorn, styles.maaKawaTypo]}>
              Mały popcorn
            </Text>
            <Image
              style={styles.pngitem48680922Icon}
              contentFit="cover"
              source={require("./assets/pngitem-4868092-2.png")}
            />
          </View>
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
      <View style={[styles.navigationBar, styles.navigationBarPosition]}>
        <View style={[styles.homeinactiveParent, styles.image10IconPosition]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("./assets/homeinactive.png")}
          />
          <Image
            style={[styles.popcornactiveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("./assets/popcornactive.png")}
          />
          <Image
            style={[styles.popcornactiveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("./assets/mask-group.png")}
          />
          <Image
            style={[styles.popcornactiveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("./assets/mask-group1.png")}
          />
        </View>
        <View style={[styles.iphoneIndicator, styles.navigationBarPosition]}>
          <View style={styles.line} />
        </View>
        <View style={styles.navigationBarChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderLayout: {
    height: 186,
    width: 578,
    top: 0,
    position: "absolute",
  },
  image2IconLayout: {
    height: 184,
    top: 0,
  },
  sliderBg: {
    backgroundColor: "transparent",
    position: "absolute",
  },
  frameParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  przekskiLayout: {
    width: 322,
    color: Color.colorWhitesmoke_100,
  },
  przekskiTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  iphonestatusbarPosition: {
    marginLeft: -176,
    left: "50%",
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  komponentLayout: {
    height: 119,
    width: 370,
    position: "absolute",
  },
  maskGroupLayout: {
    height: 227,
    width: 408,
    position: "absolute",
  },
  pressablePosition: {
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    backgroundColor: "transparent",
  },
  dlaCiebieITypo: {
    color: Color.colorLightgray,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  viewLayout: {
    width: 12,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_7xs,
    height: 12,
    top: 0,
    position: "absolute",
  },
  maaKawaTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    color: Color.colorLightgray,
    textAlign: "left",
    position: "absolute",
  },
  parentLayout: {
    width: 161,
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_16xl,
    height: 172,
    overflow: "hidden",
  },
  image10IconPosition: {
    top: 18,
    position: "absolute",
  },
  maaKawaPosition: {
    marginLeft: -50.5,
    left: "50%",
  },
  navigationBarPosition: {
    width: 430,
    bottom: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 35,
    width: 35,
  },
  image2Icon: {
    left: 8,
    width: 434,
    position: "absolute",
  },
  sliderChild: {
    height: 184,
    top: 0,
    left: 0,
    width: 578,
    backgroundColor: "transparent",
  },
  sliderItem: {
    left: 21,
    width: 367,
    height: 40,
    top: 0,
    position: "absolute",
  },
  sliderInner: {
    top: 121,
    left: 1,
    width: 375,
    height: 65,
  },
  slider: {
    left: 0,
  },
  idealneNaSeans: {
    fontSize: 17,
    height: 53,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    width: 322,
  },
  przekski: {
    fontSize: 33,
    marginTop: -29,
    width: 322,
    color: Color.colorWhitesmoke_100,
  },
  appName: {
    width: 267,
    height: 106,
    paddingHorizontal: 0,
    paddingVertical: 5,
    justifyContent: "center",
    overflow: "hidden",
  },
  appNameWrapper: {
    width: 258,
    height: 111,
    justifyContent: "center",
  },
  frameWrapper: {
    width: 255,
    height: 73,
    alignItems: "center",
  },
  frameChild: {
    width: 71,
    height: 71,
  },
  vectorWrapper: {
    borderRadius: 50,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.14)",
    borderWidth: 4,
    marginLeft: 52,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    top: 58,
    left: 29,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  headerEkranuPrzeksek: {
    left: -8,
  },
  text: {
    fontSize: 19,
    fontFamily: FontFamily.berlinSansFB,
    color: Color.colorWhite,
    width: 43,
    height: 20,
    textAlign: "left",
  },
  signalIcon: {
    width: 18,
    height: 18,
  },
  wiFiIcon: {
    height: 22,
    marginLeft: 6,
    width: 24,
  },
  fullBatteryIcon: {
    width: 29,
    marginLeft: 6,
    height: 32,
  },
  signalParent: {
    marginLeft: 226,
    alignItems: "center",
  },
  iphonestatusbar: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
    top: 0,
  },
  iphonestatusbarOgranicznik: {
    top: 5,
    width: 352,
    height: 32,
    left: "50%",
  },
  image9Icon: {
    top: 44,
    left: 26,
  },
  maskGroup: {
    top: -44,
    left: -26,
  },
  pressable: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 0,
    top: 0,
  },
  ucztaWTrakcie: {
    fontSize: FontSize.size_mini,
  },
  przekski1: {
    fontSize: FontSize.size_11xl,
    width: 217,
    marginTop: -4,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  rightArrowIcon: {
    width: 26,
    height: 32,
  },
  rightArrowWrapper: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorGray_300,
    width: 59,
    height: 54,
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: 0,
    marginLeft: 49,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  frameGroup: {
    top: 28,
    left: 22,
    width: 325,
    alignItems: "center",
    position: "absolute",
  },
  komponentPrzekski: {
    top: 435,
    borderRadius: Border.br_xl,
    marginLeft: -184.5,
    width: 370,
    left: "50%",
    overflow: "hidden",
  },
  view: {
    left: 48,
  },
  view1: {
    left: 0,
  },
  curr: {
    left: 19,
    backgroundColor: "#31078b",
    borderRadius: Border.br_7xs,
    height: 12,
    width: 24,
    top: 0,
    position: "absolute",
  },
  sliderNav: {
    top: 271,
    left: 175,
    width: 60,
    height: 12,
    position: "absolute",
  },
  mayPopcorn: {
    marginLeft: -63.5,
    top: 119,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: "50%",
  },
  pngitem48680922Icon: {
    top: 7,
    left: 37,
    width: 88,
    height: 112,
    position: "absolute",
  },
  lodyOreo: {
    marginLeft: -45.5,
    top: 119,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: "50%",
  },
  image10Icon: {
    width: 101,
    height: 101,
    marginLeft: -50.5,
    left: "50%",
  },
  lodyOreoParent: {
    marginLeft: 20,
  },
  pngitem48680921Icon: {
    marginLeft: -48.5,
    width: 98,
    height: 125,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  maaKawa: {
    top: 120,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    color: Color.colorLightgray,
    textAlign: "left",
    position: "absolute",
  },
  image30Icon: {
    top: 19,
    right: 5,
    width: 157,
    height: 96,
    position: "absolute",
  },
  sliderPrzekasek: {
    marginLeft: -205.5,
    top: 73,
    alignItems: "flex-end",
    height: 172,
    width: 411,
    left: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  naszeKlasyki: {
    fontSize: 23,
    color: "#f5f5f5",
  },
  dlaCiebieI: {
    fontSize: 16,
    width: 285,
    display: "flex",
    alignItems: "center",
  },
  naszeKlasykiParent: {
    marginLeft: -169.5,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  komponentPrzekskiChild: {
    height: 119,
    width: 370,
    position: "absolute",
    left: 0,
    top: 0,
  },
  komponentPrzekski1: {
    top: 302,
    borderRadius: Border.br_xl,
    marginLeft: -184.5,
    width: 370,
    left: "50%",
    overflow: "hidden",
  },
  komponentPrzekskiParent: {
    top: 200,
    left: 2,
    height: 584,
    width: 411,
    position: "absolute",
  },
  popcornactiveIcon: {
    marginLeft: 58,
  },
  homeinactiveParent: {
    left: 31,
    width: 368,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  line: {
    borderRadius: 575,
    backgroundColor: Color.colorWhite,
    width: 169,
    height: 5,
  },
  iphoneIndicator: {
    paddingHorizontal: 101,
    paddingVertical: 48,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
  },
  navigationBarChild: {
    top: 17,
    left: 140,
    borderRadius: 13,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 58,
    height: 59,
    position: "absolute",
    overflow: "hidden",
  },
  navigationBar: {
    marginLeft: -215,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: "#141414",
    height: 142,
    left: "50%",
    overflow: "hidden",
  },
  ekranPrzeksek: {
    borderRadius: 40,
    backgroundColor: "#000",
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Index;
