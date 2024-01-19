/* fonts */
import {StyleSheet} from "react-native";

/* font sizes */
export const FontSize = {
  size_lg: 18,
  size_mid: 17,
};
/* Colors */
export const Color = {
  colorGray_100: "#7f7f7f",
  colorGray_200: "rgba(255, 255, 255, 0.5)",
  colorGray_300: "rgba(125, 125, 125, 0.33)",
  colorWhite: "#fff",
  colorWhitesmoke: "#ececec",
};
/* Paddings */
export const Padding = {
  p_8xs: 5,
};
/* border radiuses */
export const Border = {
  br_7xs: 6,
  br_xl: 20,
};

export const styles = StyleSheet.create({
  sliderLayout: {
    height: 186,
    width: 578,
    position: "absolute",
  },
  image2IconPosition: {
    height: 184,
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
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
  patnoTypo: {
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhitesmoke,
  },
  kartaVisaItemPosition: {
    zIndex: 1,
    position: "absolute",
  },
  garyLeeTypo: {
    height: 26,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_mid,
  },
  kartaLayout: {
    width: 291,
    borderRadius: Border.br_xl,
    backgroundColor: "transparent",
  },
  visaTypo: {
    zIndex: 2,
    height: 32,
    display: "flex",
    color: Color.colorWhite,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  text6FlexBox: {
    display: "flex",
    alignItems: "center",
  },
  textTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  oOOOTypo: {
    top: 289,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  viewLayout: {
    width: 12,
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_7xs,
    height: 12,
    top: 0,
    position: "absolute",
  },
  image2Icon: {
    width: 434,
  },
  sliderChild: {
    backgroundColor: "transparent",
    width: 578,
    height: 184,
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
    backgroundColor: "transparent",
    position: "absolute",
  },
  slider: {
    left: 0,
    top: 0,
  },
  zamwienie: {
    height: 53,
    width: 322,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.size_mid,
    color: Color.colorWhitesmoke,
  },
  patno: {
    fontSize: 33,
    marginTop: -29,
    width: 322,
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
    width: 255,
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
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    top: 58,
    justifyContent: "center",
    alignItems: "center",
    left: 29,
    position: "absolute",
  },
  headerEkranuPrzeksek1: {
    top: 21,
    left: 3,
  },
  frameItem: {
    backgroundColor: Color.colorWhite,
    width: 370,
    height: 89,
    zIndex: 0,
    borderRadius: Border.br_xl,
  },
  maskGroupIcon1: {
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
    alignItems: "center",
    flexDirection: "row",
  },
  rectangleParent: {
    marginLeft: -186,
    top: 648,
    left: "50%",
    position: "absolute",
  },
  kartaVisaChild: {
    height: 166,
    zIndex: 0,
  },
  kartaVisaItem: {
    height: 154,
    zIndex: 1,
    position: "absolute",
    left: 0,
    top: 0,
  },
  visa: {
    width: 66,
    left: 9,
    top: 13,
    zIndex: 2,
    height: 32,
  },
  text6: {
    top: 111,
    width: 275,
    height: 43,
    zIndex: 3,
    color: Color.colorWhite,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
    left: 9,
  },
  text7: {
    top: 119,
    left: 230,
    zIndex: 4,
    color: Color.colorWhite,
  },
  kartaVisa: {
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  kartaVisa1: {
    marginLeft: 35,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  mastercard: {
    width: 123,
    left: 9,
    top: 13,
    zIndex: 2,
    height: 32,
  },
  dodajNowKart1: {
    marginTop: -16,
    marginLeft: -84.5,
    top: "50%",
    width: 169,
    left: "50%",
  },
  karty: {
    marginLeft: -204,
    top: 422,
    width: 411,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  backIcon1: {
    width: 30,
    height: 30,
  },
  zamwienie1: {
    width: 322,
    color: Color.colorWhitesmoke,
    height: 26,
  },
  ustawieniaKonta: {
    fontSize: 30,
    lineHeight: 77,
    width: 171,
    height: 55,
    marginTop: -22,
  },
  appName1: {
    width: 278,
  },
  appNameFrame: {
    width: 235,
    height: 66,
    justifyContent: "center",
  },
  frameView: {
    marginLeft: 17,
    width: 278,
  },
  backParent: {
    top: 205,
    left: 63,
    width: 294,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
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
    left: 55,
    width: 181,
    display: "flex",
    alignItems: "center",
  },
  oOOO: {
    left: 29,
  },
  view: {
    left: 46,
  },
  view1: {
    left: 0,
  },
  curr1: {
    left: 17,
    backgroundColor: "#31078b",
    width: 24,
    borderRadius: Border.br_7xs,
    height: 12,
    top: 0,
    position: "absolute",
  },
  sliderNav: {
    top: 599,
    left: 178,
    width: 58,
    height: 12,
    position: "absolute",
  },
  wzr: {
    backgroundColor: "#000",
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});
