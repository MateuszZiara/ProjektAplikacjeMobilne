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
  colorWhite: "#fff",
  colorGray_100: "rgba(255, 255, 255, 0.5)",
  colorWhitesmoke: "#ececec",
};
/* Paddings */
export const Padding = {
  p_8xs: 5,
};
/* border radiuses */
export const Border = {
  br_xl: 20,
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
    height: 106,
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
  oOOOTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    top: 303,
    textAlign: "left",
    position: "absolute",
  },
  textPosition: {
    left: "50%",
    position: "absolute",
  },
  garyLeeTypo: {
    lineHeight: 26,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_mid,
  },
  inputLayout: {
    height: 62,
    width: 50,
    borderWidth: 2,
    borderColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    borderStyle: "solid",
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
    fontWeight: "500",
    fontSize: FontSize.size_mid,
    width: 322,
  },
  zamwienie: {
    fontSize: 33,
    marginTop: -29,
    width: 322,
    color: Color.colorWhitesmoke,
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
    top: -4,
    left: 51,
    borderRadius: 50,
    borderColor: "rgba(255, 255, 255, 0.14)",
    borderWidth: 4,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
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
    height: 26,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_mid,
    width: 322,
  },
  ustawieniaKonta: {
    fontSize: 30,
    lineHeight: 77,
    width: 171,
    marginTop: -22,
    height: 55,
    color: Color.colorWhitesmoke,
    fontWeight: "600",
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
  },
  patnoKart: {
    color: Color.colorGray_100,
  },
  blik: {
    color: Color.colorWhite,
  },
  patnoKartGotwkaPrzyContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  patnoKartGotwkaPrzyContainer: {
    left: 62,
    width: 181,
    display: "flex",
    alignItems: "center",
  },
  frameItem: {
    backgroundColor: Color.colorWhite,
    width: 370,
    height: 89,
    zIndex: 0,
    borderRadius: Border.br_xl,
  },
  maskGroupIcon: {
    width: 40,
    height: 40,
  },
  garyLee: {
    color: "#0c0c0c",
    width: 226,
    marginLeft: 21,
    height: 26,
  },
  maskGroupParent: {
    top: 22,
    left: 31,
    zIndex: 1,
  },
  rectangleParent: {
    marginLeft: -185,
    top: 658,
  },
  oOOO: {
    left: 36,
  },
  inputItem: {
    marginLeft: 10,
  },
  input: {
    marginLeft: -176,
    top: 478,
    flexDirection: "row",
    left: "50%",
  },
  wprowadPowyejKod: {
    top: 565,
    left: 87,
    color: Color.colorWhite,
    position: "absolute",
  },
  wzr: {
    backgroundColor: "#000",
    flex: 1,
    height: 896,
  },
});
