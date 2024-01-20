/* fonts */
import {StyleSheet} from "react-native";

export const FontFamily = {
  poppinsMedium: "Poppins-Medium",
  poppinsSemiBold: "Poppins-SemiBold",
  poppinsBold: "Poppins-Bold",
};
/* font sizes */
export const FontSize = {
  size_mid: 17,
};
/* Colors */
export const Color = {
  colorWhitesmoke: "#ececec",
  colorGray_100: "rgba(255, 255, 255, 0.5)",
  colorWhite: "#fff",
};
/* Paddings */
export const Padding = {
  p_8xs: 5,
};

export const styles = StyleSheet.create({
  image2IconPosition: {
    height: 184,
    left: 0,
    top: 0,
  },
  sliderBg: {
    backgroundColor: "transparent",
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  frameFlexBox: {
    height: 73,
    alignItems: "center",
    flexDirection: "row",
  },
  gb:{
    marginTop:-5,
    left:-15,
  },
  appSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    height: 106,
    justifyContent: "center",
    overflow: "hidden",
  },
  zamwienieLayout: {
    width: 322,
    color: Color.colorWhitesmoke,
  },
  zamwienieTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  garyLeeTypo: {
    height: 26,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mid,
  },
  zamwienie2Position: {
    left: "50%",
    position: "absolute",
  },
  image2Icon: {
    width: 434,
    height: 184,
    position: "absolute",
  },
  sliderChild: {
    height: 184,
    left: 0,
    top: 0,
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
    top: 0,
    height: 186,
    width: 578,
    position: "absolute",
  },
  twojeKonto: {
    height: 53,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mid,
    width: 322,
  },
  zamwienie: {
    fontSize: 33,
    marginTop: -29,
    width: 322,
    color: Color.colorWhitesmoke,
    textAlign: "left",
  },
  appName: {
    width: 267,
  },
  appNameWrapper: {
    width: 258,
    height: 111,
    justifyContent: "center",
  },
  frameWrapper: {
    width: 158,
  },
  headerEkranuPrzeksekInner: {
    top: 58,
    left: 29,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  headerEkranuPrzeksek: {
    top: 21,
    left: 3,
    height: 186,
    width: 578,
    position: "absolute",
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  zamwienie1: {
    width: 322,
    color: Color.colorWhitesmoke,
  },
  ustawieniaKonta: {
    fontSize: 30,
    lineHeight: 77,
    width: 171,
    height: 55,
    marginTop: -22,
    textAlign: "left",
    color: Color.colorWhitesmoke,
  },
  appName1: {
    width: 278,
  },
  appNameContainer: {
    width: 235,
    height: 66,
    justifyContent: "center",
  },
  frameContainer: {
    marginLeft: 17,
    width: 278,
  },
  backParent: {
    top: 205,
    left: 63,
    width: 294,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  patnoKart: {
    color: Color.colorGray_100,
  },
  gotwkaPrzyKasie: {
    color: Color.colorWhite,
  },
  patnoKartGotwkaPrzyContainer1: {
    width: "100%",
  },
  patnoKartGotwkaPrzyContainer: {
    top: 303,
    left: 62,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    display: "flex",
    width: 217,
    textAlign: "left",
  },
  frameChild: {
    borderRadius: 20,
    backgroundColor: Color.colorWhite,
    width: 370,
    height: 89,
    zIndex: 0,
  },
  maskGroupIcon: {
    width: 40,
    height: 40,
  },
  garyLee: {
    lineHeight: 26,
    color: "#0c0c0c",
    width: 226,
    marginLeft: 21,
  },
  maskGroupParent: {
    top: 22,
    left: 31,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  rectangleParent: {
    marginLeft: -185,
    top: 658,
  },
  twojeKontoTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  zamwienie2: {
    marginLeft: -147,
    top: 448,
    fontSize: 20,
    textAlign: "center",
    width: 294,
    color: Color.colorWhitesmoke,
  },
  wzr: {
    backgroundColor: "#000",
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});