/* fonts */
import {StyleSheet} from "react-native";

/* font sizes */
export const FontSize = {
  size_mid: 17,
  size_sm: 14,
  size_smi: 13,
};
/* Colors */
export const Color = {
  colorGray_100: "rgba(255, 255, 255, 0.15)",
  colorWhitesmoke: "#ececec",
  colorWhite: "#fff",
};
/* Paddings */
export const Padding = {
  p_8xs: 5,
  p_7xs: 6,
};
/* border radiuses */
export const Border = {
  br_11xl: 30,
  br_xl: 20,
};

export const styles = StyleSheet.create({
  repertuarPosition: {
    left: "50%",
    position: "absolute",
  },
  singleLayout: {
    width: 367,
    height: 46,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  tytulTypo1: {
    height: 24,
    display: "flex",
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    fontWeight: "600",
    alignItems: "center",
  },
  sliderPosition: {
    left: 0,
    top: 0,
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
    fontWeight: "600",
  },
  frameWrapperLayout: {
    height: 25,
    width: 27,
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
  tytulParent: {
    marginTop: -10.5,
    width: 150,
    marginLeft: 33.5,
    top: "50%",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    width: 203,
    borderRadius: Border.br_xl,
    left: 0,
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
    height: 46,
    position: "absolute",
  },
  singleBar: {
    height: 46,
  },
  rightArrowContainer: {
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
    position: "absolute",
  },
  tytul5: {
    width: 186,
  },
  singleBar1: {
    marginTop: 10,
    height: 46,
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
    position: "absolute",
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
    bottom: 0,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: "#141414",
    width: 430,
    height: 142,
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
  backIcon: {
    width: 30,
    height: 30,
  },
  ustawienia: {
    height: 26,
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
    position: "absolute",
  },
  dlaCiebieI: {
    height: 53,
    fontWeight: "500",
    fontSize: FontSize.size_mid,
    width: 322,
  },
  bilety: {
    fontSize: 33,
    marginTop: -29,
    width: 322,
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
  },
  frameParent: {
    top: 79,
    left: 32,
    justifyContent: "center",
    position: "absolute",
  },
  wzr: {
    backgroundColor: "#000",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});
