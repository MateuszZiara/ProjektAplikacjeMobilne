/* fonts */
import {StyleSheet} from "react-native";

/* font sizes */
export const FontSize = {
  size_mid: 17,
  size_lg: 18,
  size_7xs: 6,
};
/* Colors */
export const Color = {
  colorGray_100: "#7f7f7f",
  colorGray_200: "rgba(255, 255, 255, 0.5)",
  colorWhite: "#fff",
  colorWhitesmoke: "#ececec",
};
/* Paddings */
export const Padding = {
  p_8xs: 5,
};


export const styles = StyleSheet.create({
  wzrLayout: {
    overflow: "hidden",
    width: "100%",
  },
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
    flexDirection: "row",
    position: "absolute",
  },
  frameFlexBox: {
    height: 73,
    alignItems: "center",
    flexDirection: "row",
  },
  appSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    overflow: "hidden",
  },
  zamwienieLayout: {
    width: 322,
    color: Color.colorWhitesmoke,
  },
  textTypo: {
    fontWeight: "600",
    textAlign: "left",
  },
  koszykLayout: {
    height: 35,
    width: 35,
    left: 0,
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  garyLeeTypo: {
    height: 26,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_mid,
  },
  textPosition: {
    left: "50%",
    position: "absolute",
  },
  oOOOTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    top: 310,
    position: "absolute",
    textAlign: 'left',
    flexWrap: 'wrap',
  },
  image2Icon: {
    width: 434,
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
    fontSize: FontSize.size_mid,
    width: 322,
    fontWeight: "500",
  },
  zamwienie: {
    fontSize: 33,
    marginTop: -29,
    width: 322,
    color: Color.colorWhitesmoke,
  },
  appName: {
    width: 267,
    height: 106,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
  },
  appNameWrapper: {
    width: 258,
    height: 111,
    justifyContent: "center",
  },
  frameWrapper: {
    width: 158,
  },
  maskGroupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  maskGroupItem: {
    top: 10,
    left: 8,
    width: 26,
    height: 13,
    position: "absolute",
  },
  maskGroupInner: {
    top: 16,
    left: 25,
    width: 9,
    height: 9,
    position: "absolute",
  },
  text: {
    marginTop: -0.5,
    marginLeft: 10.5,
    top: "50%",
    fontSize: FontSize.size_7xs,
    width: 3,
    height: 7,
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
    fontWeight: "600",
    textAlign: "left",
  },
  maskGroup: {
    top: 0,
  },
  koszyk: {
    top: 8,
  },
  frameChild: {
    width: 71,
    height: 71,
  },
  vectorWrapper: {
    top:-10,
    left: 21,
    borderRadius: 50,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.14)",
    borderWidth: 4,
    justifyContent: "center",
  },
  koszykParent: {
    width: 110,
    marginLeft: 82,
    height: 55,
  },
  frameParent: {
    top: 58,
    left: 29,
    justifyContent: "center",
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
    marginTop: -22,
    height: 55,
    color: Color.colorWhitesmoke,
  },
  appName1: {
    width: 278,
    height: 106,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
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
  },
  zamwienie2: {
    fontSize: 20,
    textAlign: "center",
    width: 363,
    height: 77,
    color: Color.colorWhitesmoke,
    fontWeight: "500",
  },
  appName2: {
    marginLeft: -189,
    top: 450,
    width: 347,
    height: 115,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    justifyContent: "center",
    overflow: "hidden",
  },
  patnoKart: {
    color: Color.colorWhite,
  },
  gotwkaPrzyKasie: {
    color: Color.colorGray_200,
  },
  blik: {
    color: Color.colorGray_100,
  },
  patnoKartGotwkaPrzyContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  patnoKartGotwkaPrzyContainer: {
    left: 58,
    width: 181,
    display: "flex",
    alignItems: "center",
  },
  oOOO: {
    left: 32,
  },
  frameItem: {
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
    width: 223,
    marginLeft: 21,
  },
  maskGroupParent: {
    top: 22,
    left: 31,
    zIndex: 1,
  },
  rectangleParent: {
    marginLeft: -186,
    top: 648,
  },
  wzr: {
    backgroundColor: "#000",
    flex: 1,
    height: 896,
  },
});
