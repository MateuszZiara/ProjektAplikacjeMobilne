/* fonts */
import {StyleSheet} from "react-native";

export const FontFamily = {
  poppinsSemiBold: "Poppins-SemiBold",
  poppinsMedium: "Poppins-Medium",
};
/* font sizes */
export const FontSize = {
  size_3xl: 22,
  size_xs: 12,
};
/* Colors */
export const Color = {
  colorBlack: "#000",
  colorWhitesmoke: "#ececec",
  colorGray: "rgba(255, 255, 255, 0.15)",
  colorWhite: "#fff",
  colorLightgray: "#cbcbcb",
  colorSilver: "rgba(196, 196, 196, 0.1)",
};
/* Paddings */
export const Padding = {
  p_7xs: 6,
};
/* border radiuses */
export const Border = {
  br_mid: 17,
  br_xl: 20,
};


export const styles = StyleSheet.create({
  wzrInnerPosition: {
    left: 22,
    position: "absolute",
  },
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  garyLeeTypo: {
    height: 26,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  rightLayout: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_7xs,
    height: 54,
    width: 59,
    backgroundColor: Color.colorGray,
    borderRadius: Border.br_mid,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  garyTypo: {
    lineHeight: 33,
    fontSize: FontSize.size_3xl,
    marginTop: -5,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: 26,
    textAlign: "left",
  },
  ustawieniaClr: {
    color: Color.colorWhitesmoke,
    textAlign: "left",
  },
  frameChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorSilver,
    height: 89,
    zIndex: 0,
    width: 370,
  },
  garyLee: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    color: Color.colorLightgray,
    width: 182,
    textAlign: "left",
    height: 26,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  garyLee1: {
    fontSize: 19,
    lineHeight: 29,
    marginTop: -5,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: 26,
    width: 182,
    textAlign: "left",
  },
  garyLeeParent: {
    justifyContent: "center",
  },
  rightArrowIcon: {
    width: 26,
    height: 32,
  },
  rightArrowWrapper: {
    marginLeft: 83,
  },
  frameGroup: {
    top: 21,
    left: 31,
    zIndex: 1,
    position: "absolute",
  },
  garyLee3: {
    width: 182,
  },
  rectangleGroup: {
    marginTop: 13,
  },
  garyLee5: {
    width: 228,
  },
  rightArrowFrame: {
    marginLeft: 39,
  },
  wzrInner: {
    top: 163,
    height: 610,
    width: 370,
  },
  wzrChild: {
    marginLeft: -206,
    top: 77,
    left: "50%",
    width: 412,
    height: 118,
    backgroundColor: "transparent",
    position: "absolute",
  },
  wzrItem: {
    top: 0,
    left: 0,
    width: 414,
    height: 134,
    position: "absolute",
    backgroundColor: Color.colorBlack,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  ustawienia: {
    fontSize: 17,
    width: 322,
    height: 26,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorWhitesmoke,
  },
  ustawieniaKonta: {
    fontSize: 30,
    lineHeight: 77,
    width: 286,
    height: 55,
    marginTop: -22,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.colorWhitesmoke,
  },
  appName: {
    height: 106,
    paddingHorizontal: 0,
    paddingVertical: 5,
    width: 278,
    justifyContent: "center",
    overflow: "hidden",
  },
  appNameWrapper: {
    height: 66,
    width: 278,
    justifyContent: "center",
  },
  frameWrapper: {
    height: 73,
    marginLeft: 17,
    width: 278,
  },
  backParent: {
    top: 61,
    width: 319,
    justifyContent: "center",
    left: 22,
    position: "absolute",
  },
  wzr: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorBlack,
  },
});