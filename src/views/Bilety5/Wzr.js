import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const Wzr = () => {
  return (
    <View style={styles.wzr}>
      <View style={styles.repertuar}>
        <View style={styles.singleBar}>
          <View style={[styles.tytulParent, styles.parentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>18:30</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>21:30</Text>
            <View style={styles.rightFlexBox}>
              <Image
                style={styles.rightArrowIcon}
                contentFit="cover"
                source={require("../assets/right-arrow.png")}
              />
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>
                Batman Początki
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.singleBar1}>
          <View style={[styles.tytulParent, styles.parentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:00</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>22:00</Text>
            <View style={styles.frameWrapperLayout}>
              <View style={[styles.rightArrowContainer, styles.rightFlexBox]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("../assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul5, styles.tytulTypo]}>
                Pięć Koszmarnych Nocy
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.singleBar1}>
          <View style={[styles.frameView, styles.frameViewPosition]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>18:45</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:45</Text>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>
                American Psycho
              </Text>
            </View>
          </View>
          <View style={[styles.singleBarInner, styles.frameWrapperLayout]}>
            <View style={[styles.rightArrowContainer, styles.rightFlexBox]}>
              <Image
                style={styles.rightArrowIcon}
                contentFit="cover"
                source={require("../assets/right-arrow1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.singleBar1}>
          <View style={[styles.tytulParent, styles.parentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:00</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:30</Text>
            <View style={styles.frameWrapperLayout}>
              <View style={[styles.rightArrowContainer, styles.rightFlexBox]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("../assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Toy Story</Text>
            </View>
          </View>
        </View>
        <View style={styles.singleBar1}>
          <View style={[styles.tytulParent, styles.parentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:30</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>22:30</Text>
            <View style={styles.frameWrapperLayout}>
              <View style={[styles.rightArrowContainer, styles.rightFlexBox]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("../assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Napoleon</Text>
            </View>
          </View>
        </View>
        <View style={styles.singleBar1}>
          <View style={[styles.tytulParent, styles.parentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:15</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:15</Text>
            <View style={styles.frameWrapperLayout}>
              <View style={[styles.rightArrowContainer, styles.rightFlexBox]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("../assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Auta</Text>
            </View>
          </View>
        </View>
        <View style={styles.singleBar1}>
          <View style={[styles.tytulParent, styles.parentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:15</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:15</Text>
            <View style={styles.frameWrapperLayout}>
              <View style={[styles.rightArrowContainer, styles.rightFlexBox]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("../assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Auta 2</Text>
            </View>
          </View>
        </View>
        <View style={styles.singleBar1}>
          <View style={[styles.tytulParent, styles.parentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:15</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:15</Text>
            <View style={styles.frameWrapperLayout}>
              <View style={[styles.rightArrowContainer, styles.rightFlexBox]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("../assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Auta 3</Text>
            </View>
          </View>
        </View>
        <View style={styles.singleBar1}>
          <View style={[styles.tytulParent, styles.parentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:15</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:15</Text>
            <View style={styles.frameWrapperLayout}>
              <View style={[styles.rightArrowContainer, styles.rightFlexBox]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("../assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Toy Story</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.wzrChild} />
      <View style={[styles.navigationBar, styles.navigationBarPosition]}>
        <View style={[styles.homeinactiveParent, styles.parentFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/homeinactive.png")}
          />
          <Image
            style={[styles.popcorninactiveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/popcorninactive.png")}
          />
          <Image
            style={[styles.popcorninactiveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/mask-group.png")}
          />
          <Image
            style={[styles.popcorninactiveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/mask-group1.png")}
          />
        </View>
        <View style={[styles.iphoneIndicator, styles.navigationBarPosition]}>
          <View style={styles.line} />
        </View>
        <View style={styles.navigationBarChild} />
      </View>
      <View style={[styles.headerEkranuPrzeksek, styles.sliderLayout]}>
        <View style={[styles.slider, styles.sliderLayout]}>
          <Image
            style={[styles.image2Icon, styles.image2IconLayout]}
            contentFit="cover"
            source={require("../assets/image-2.png")}
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
      <View
        style={[
          styles.iphonestatusbarOgranicznik,
          styles.iphonestatusbarPosition,
        ]}
      >
        <View style={[styles.iphonestatusbar, styles.iphonestatusbarPosition]}>
          <Text style={styles.text}>9.41</Text>
          <View style={[styles.signalParent, styles.parentFlexBox]}>
            <Image
              style={styles.signalIcon}
              contentFit="cover"
              source={require("../assets/signal.png")}
            />
            <Image
              style={styles.wiFiIcon}
              contentFit="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={styles.fullBatteryIcon}
              contentFit="cover"
              source={require("../assets/full-battery.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.backParent, styles.parentFlexBox]}>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
        <View style={[styles.frameWrapper5, styles.frameWrapperFlexBox]}>
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
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.frameWrapper6, styles.frameWrapperFlexBox]}>
          <View style={styles.appNameContainer}>
            <View style={[styles.appName1, styles.appSpaceBlock]}>
              <Text style={[styles.dlaCiebieI, styles.biletyLayout]}>
                Dla ciebie i dla rodziny
              </Text>
              <Text style={[styles.bilety, styles.biletyLayout]}>Bilety</Text>
            </View>
          </View>
        </View>
        <View style={[styles.vectorWrapper, styles.parentFlexBox]}>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-19.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  tytulTypo1: {
    height: 24,
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    display: "flex",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    alignItems: "center",
  },
  frameViewPosition: {
    marginTop: -10,
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  tytulTypo: {
    textAlign: "center",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  rightFlexBox: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_7xs,
    backgroundColor: Color.colorGray_100,
    justifyContent: "center",
    height: 25,
    width: 27,
    borderRadius: Border.br_xl,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameWrapperLayout: {
    height: 25,
    width: 27,
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
  sliderLayout: {
    height: 186,
    width: 578,
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
  iphonestatusbarPosition: {
    marginLeft: -176,
    left: "50%",
    position: "absolute",
  },
  frameWrapperFlexBox: {
    height: 73,
    alignItems: "center",
    flexDirection: "row",
  },
  appSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    height: 106,
    justifyContent: "center",
    overflow: "hidden",
  },
  biletyLayout: {
    width: 322,
    color: Color.colorWhitesmoke,
    textAlign: "left",
  },
  tytul: {
    width: 55,
  },
  tytul1: {
    width: 58,
  },
  rightArrowIcon: {
    width: 13,
    height: 16,
  },
  tytulParent: {
    marginTop: -10.5,
    alignItems: "center",
    width: 150,
    marginLeft: 33.5,
    top: "50%",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    width: 203,
    left: 0,
    top: 0,
    borderRadius: Border.br_xl,
    height: 46,
    position: "absolute",
  },
  tytul2: {
    width: 126,
  },
  tytulWrapper: {
    marginLeft: -101.5,
    justifyContent: "space-between",
    width: 203,
  },
  rectangleParent: {
    width: 203,
    left: 0,
    top: 0,
    height: 46,
    position: "absolute",
  },
  singleBar: {
    height: 46,
    width: 367,
  },
  rightArrowContainer: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  tytul5: {
    width: 186,
  },
  singleBar1: {
    marginTop: 10,
    height: 46,
    width: 367,
  },
  frameView: {
    width: 150,
    marginLeft: 33.5,
    marginTop: -10,
  },
  singleBarInner: {
    top: 13,
    left: 330,
    position: "absolute",
  },
  repertuar: {
    marginLeft: -189,
    top: 337,
    width: 378,
    height: 422,
    left: "50%",
    position: "absolute",
  },
  wzrChild: {
    top: 208,
    left: -2,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: 416,
    height: 82,
    position: "absolute",
  },
  popcorninactiveIcon: {
    marginLeft: 58,
  },
  homeinactiveParent: {
    top: 18,
    left: 31,
    width: 368,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
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
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  navigationBarChild: {
    top: 20,
    left: 233,
    borderRadius: 13,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: 59,
    width: 58,
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
  image2Icon: {
    left: 3,
    width: 434,
    position: "absolute",
  },
  sliderChild: {
    height: 184,
    top: 0,
    width: 578,
    backgroundColor: "transparent",
    left: 0,
  },
  sliderItem: {
    left: 21,
    height: 40,
    top: 0,
    width: 367,
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
    top: 0,
  },
  headerEkranuPrzeksek: {
    top: 21,
    left: -3,
  },
  text: {
    fontSize: 19,
    fontFamily: FontFamily.berlinSansFB,
    width: 43,
    height: 20,
    display: "flex",
    textAlign: "left",
    color: Color.colorWhite,
    alignItems: "center",
  },
  signalIcon: {
    width: 18,
    height: 18,
  },
  wiFiIcon: {
    width: 24,
    height: 22,
    marginLeft: 6,
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
    top: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  iphonestatusbarOgranicznik: {
    top: 5,
    width: 352,
    height: 32,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  ustawienia: {
    height: 26,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mid,
    width: 322,
  },
  ustawieniaKonta: {
    fontSize: 30,
    lineHeight: 77,
    width: 286,
    height: 55,
    marginTop: -22,
    color: Color.colorWhitesmoke,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  appName: {
    width: 278,
  },
  appNameWrapper: {
    height: 66,
    width: 278,
    justifyContent: "center",
  },
  frameWrapper5: {
    marginLeft: 17,
    width: 278,
  },
  backParent: {
    top: 205,
    left: 23,
    width: 319,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  dlaCiebieI: {
    height: 53,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mid,
    width: 322,
  },
  bilety: {
    fontSize: 33,
    marginTop: -29,
    width: 322,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  appName1: {
    width: 267,
  },
  appNameContainer: {
    width: 258,
    height: 111,
    justifyContent: "center",
  },
  frameWrapper6: {
    width: 255,
  },
  ellipseIcon: {
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
    top: 79,
    left: 32,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  wzr: {
    borderRadius: 40,
    backgroundColor: "#000",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Wzr;
