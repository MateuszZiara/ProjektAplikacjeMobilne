/* fonts */
import {StyleSheet} from "react-native";

export const FontFamily = {
  /*poppinsSemiBold: "Poppins-SemiBold",
  poppinsRegular: "Poppins-Regular",
  poppinsMedium: "Poppins-Medium",*/
};
/* font sizes */
export const FontSize = {
  size_mid: 17,
};
/* Colors */
export const Color = {
  colorWhitesmoke_100: "#ececec",
  colorWhite: "#fff",
};
/* Paddings */
export const Padding = {
  p_8xs: 5,
};
/* border radiuses */
export const Border = {
  br_11xl: 30,
  br_smi: 13,
};

export const styles = StyleSheet.create({
  repertuarPosition: {
    left: 18,
    position: "absolute",
  },
  frameParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  tytulTypo1: {
    height: 24,
    color: Color.colorWhite,
    display: "flex",
    textAlign: "left",
    //fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    alignItems: "center",
  },
  rightWrapperFlexBox: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_7xs,
    backgroundColor: Color.colorGray_300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameViewPosition: {
    marginTop: -10,
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tytulTypo: {
    textAlign: "center",
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    //fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  wrapperLayout: {
    height: 25,
    width: 27,
  },
  repertuar3Typo: {
    //fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  jedyneWSwoimTypo: {
    //fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  komponentPrzekskiChildBg: {
    backgroundColor: "transparent",
    position: "absolute",
  },
  lodyOreoTypo: {
    //fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    color: Color.colorLightgray,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  parentLayout: {
    height: 258,
    width: 230,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_16xl,
    overflow: "hidden",
  },
  viewLayout: {
    width: 12,
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_7xs,
    height: 12,
    top: 0,
    position: "absolute",
  },
  komponentLayout: {
    height: 119,
    width: 370,
  },
  sliderInnerPosition: {
    left: 1,
    backgroundColor: "transparent",
    position: "absolute",
  },
  tytulParentPosition: {
    left: "50%",
    position: "absolute",
  },
  homeinactiveParentPosition: {
    top: 18,
    position: "absolute",
  },
  iconLayout: {
    height: 35,
    width: 35,
  },
  najbliszeSeanseClr: {
    display: "flex",
    color: Color.colorLightgray,
    alignItems: "center",
  },
  sliderLayout: {
    height: 186,
    width: 578,
    top: 0,
    position: "absolute",
  },
  image2IconPosition: {
    height: 184,
    top: 0,
    position: "absolute",
  },
  repertuar3Layout: {
    width: 322,
    color: Color.colorWhitesmoke_100,
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
  rightArrowWrapper: {
    height: 25,
    width: 27,
    borderRadius: Border.br_xl,
  },
  tytulParent: {
    marginTop: -10.5,
    width: 150,
    marginLeft: 33.5,
    left: "50%",
    position: "absolute",
    top: "50%",
    alignItems: "center",
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
    zIndex: 0,
    height: 46,
    width: 367,
  },
  rightArrowContainer: {
    left: 0,
    top: 0,
    height: 25,
    width: 27,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  tytul5: {
    width: 186,
  },
  singleBar1: {
    marginTop: 10,
    zIndex: 1,
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
  singleBar2: {
    zIndex: 2,
    marginTop: 10,
    height: 46,
    width: 367,
  },
  singleBar3: {
    zIndex: 3,
    marginTop: 10,
    height: 46,
    width: 367,
  },
  singleBar4: {
    zIndex: 4,
    marginTop: 10,
    height: 46,
    width: 367,
  },
  singleBar5: {
    zIndex: 5,
    marginTop: 10,
    height: 46,
    width: 367,
  },
  singleBar6: {
    zIndex: 6,
    marginTop: 10,
    height: 46,
    width: 367,
  },
  singleBar7: {
    zIndex: 7,
    marginTop: 10,
    height: 46,
    width: 367,
  },
  singleBar8: {
    zIndex: 8,
    marginTop: 10,
    height: 46,
    width: 367,
  },
  singleBar9: {
    zIndex: 9,
    marginTop: 10,
    height: 46,
    width: 367,
  },
  tytul32: {
    width: 188,
  },
  singleBar10: {
    zIndex: 10,
    marginTop: 10,
    height: 46,
    width: 367,
  },
  wydarzeniaSpecjalne: {
    fontSize: FontSize.size_4xl,
    color: Color.colorWhitesmoke_100,
    textAlign: "left",
  },
  poznajNaszeCykle: {
    fontSize: FontSize.size_base,
    width: 285,
    color: Color.colorLightgray,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  wydarzeniaSpecjalneParent: {
    zIndex: 11,
    marginTop: 10,
  },
  johnMartinBelshazzarsFeaIcon: {
    top: -179,
    left: -312,
    width: 734,
    height: 491,
    position: "absolute",
  },
  rectangleLineargradient: {
    top: 165,
    left: -24,
    width: 291,
    height: 93,
  },
  kulturalneRody: {
    marginLeft: -77,
    top: 217,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  image30Icon: {
    top: -19,
    left: -122,
    width: 449,
    height: 449,
    position: "absolute",
  },
  kobieceWtorki: {
    marginLeft: -68,
    top: 217,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  image30Parent: {
    marginLeft: 20,
  },
  xavierMoutonPhotographieRyIcon: {
    top: -137,
    left: -302,
    width: 797,
    height: 531,
    position: "absolute",
  },
  lodyOreo: {
    marginLeft: -82,
    top: 215,
  },
  frameParent: {
    alignItems: "flex-end",
    zIndex: 12,
    width: 413,
    marginTop: 10,
    flexDirection: "row",
  },
  view: {
    left: 63,
  },
  view1: {
    left: 80,
  },
  view2: {
    left: 0,
  },
  view3: {
    left: 17,
  },
  curr: {
    left: 34,
    backgroundColor: "#31078b",
    width: 24,
    borderRadius: Border.br_7xs,
    height: 12,
    top: 0,
    position: "absolute",
  },
  sliderNav: {
    top: 953,
    left: 168,
    width: 92,
    zIndex: 13,
    height: 12,
    position: "absolute",
  },
  glowingSpaceshipOrbitsPlaneIcon: {
    top: -228,
    left: 197,
    width: 426,
    height: 398,
    position: "absolute",
  },
  komponentPrzekskiChild: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    top: 0,
  },
  jedyneWSwoim: {
    fontSize: 15,
    color: Color.colorLightgray,
    textAlign: "left",
  },
  przekski: {
    fontSize: 30,
    width: 217,
    marginTop: -4,
    color: Color.colorWhitesmoke_200,
    //fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  rightArrowIcon11: {
    width: 26,
    height: 32,
  },
  rightArrowWrapper9: {
    borderRadius: 17,
    width: 59,
    height: 54,
    marginLeft: 49,
  },
  frameGroup: {
    top: 28,
    left: 22,
    width: 325,
    position: "absolute",
  },
  komponentPrzekski: {
    zIndex: 14,
    marginTop: 10,
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  repertuar1: {
    top: 281,
    width: 378,
    height: 492,
  },
  repertuarChild: {
    top: 177,
    height: 104,
    width: 413,
  },
  popcorninactiveIcon: {
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
  navigationBarChild: {
    left: 326,
    borderRadius: 13,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: 59,
    width: 58,
    overflow: "hidden",
  },
  navigationBar: {
    marginLeft: -215,
    bottom: -19,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: "#141414",
    width: 430,
    height: 142,
    overflow: "hidden",
  },
  najbliszeSeanse: {
    top: 260,
    textAlign: "right",
    width: 330,
    color: Color.colorLightgray,
    //fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    display: "flex",
    left: 18,
    position: "absolute",
  },
  repertuarParent: {
    top: 200,
  },
  image2Icon: {
    left: 8,
    width: 434,
  },
  sliderChild: {
    width: 578,
    height: 184,
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
    width: 375,
    height: 65,
  },
  slider: {
    left: 0,
  },
  znajdTwjFilm: {
    fontSize: 17,
    height: 53,
    //fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  repertuar3: {
    fontSize: 33,
    marginTop: -29,
    //fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
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
  frameWrapper7: {
    width: 255,
    height: 73,
    zIndex: 0,
  },
  ellipseIcon: {
    width: 71,
    height: 71,
  },
  vectorWrapper: {
    top: 5,
    left: 303,
    borderRadius: 50,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.14)",
    borderWidth: 4,
    zIndex: 1,
    justifyContent: "center",
    position: "absolute",
  },
  frameParent1: {
    top: 58,
    left: 29,
    justifyContent: "center",
    position: "absolute",
  },
  headerEkranuPrzeksek: {
    left: -8,
  },
  repertuar: {
    backgroundColor: "#000",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});