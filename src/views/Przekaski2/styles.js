/* fonts */
import {StyleSheet} from "react-native";


/* font sizes */
export const FontSize = {
  size_lg: 18,
  size_mid: 17,
};
/* Colors */
export const Color = {
  colorGray_100: "rgba(255, 255, 255, 0.1)",
  colorWhite: "#fff",
  colorLightgray: "#cbcbcb",
  colorWhitesmoke: "#ececec",
};
/* Paddings */
export const Padding = {
  p_8xs: 5,
};
/* border radiuses */
export const Border = {
  br_11xl: 30,
  br_16xl: 35,
};
export const styles = StyleSheet.create({
  image2IconPosition: {
    height: 184,
    left: 0,
    top: 0,
    position: "absolute",
  },
  sliderInnerPosition: {
    left: 1,
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
  gb:{
    marginTop:15,
    left:-15,
  },
  ustawieniaTypo: {
    color: Color.colorWhitesmoke,
    fontWeight: "500",
    fontSize: FontSize.size_mid,
    width: 322,
    textAlign: "left",
  },
  przekskiTypo: {
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhitesmoke,
  },
  sliderPosition: {
    justifyContent: "flex-end",
    width: 175,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    top: 7,
    position: "absolute",
  },
  lodyTypo: {
    color: Color.colorLightgray,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  parentLayout: {
    height: 172,
    width: 161,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_16xl,
    overflow: "hidden",
  },
  image10IconPosition: {
    top: 18,
    height: 100,
    position: "absolute",
  },
  lodyOreo2Position: {
    width: 155,
    left: "50%",
    position: "absolute",
  },
  nachosTypo: {
    top: 120,
    color: Color.colorLightgray,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  navigationBarLayout: {
    width: 430,
    position: "absolute",
  },
  homeinactiveLayout: {
    height: 35,
    width: 35,
  },
  iphonestatusbarPosition: {
    marginLeft: -176,
    left: "50%",
    position: "absolute",
  },
  image2Icon: {
    width: 434,
  },
  sliderChild: {
    backgroundColor: "transparent",
    width: 578,
  },
  sliderItem: {
    left: 21,
    width: 367,
    height: 40,
    top: 0,
    position: "absolute",
  },
  sliderInner: {
    width: 375,
    height: 65,
    top: 121,
    backgroundColor: "transparent",
  },
  headerEkranuPrzeksek: {
    height: 186,
    left: 0,
    top: 0,
    width: 578,
    position: "absolute",
  },
  idealneNaSeans: {
    height: 53,
    width: 322,
    textAlign: "left",
  },
  przekski: {
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
    marginLeft: 52,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    top: 38,
    left: 29,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  ustawienia: {
    height: 26,
    width: 322,
    textAlign: "left",
  },
  ustawieniaKonta: {
    fontSize: 30,
    lineHeight: 77,
    width: 286,
    height: 55,
    marginTop: -22,
  },
  appName1: {
    width: 278,
  },
  appNameContainer: {
    height: 66,
    width: 278,
    justifyContent: "center",
  },
  frameContainer: {
    marginLeft: 17,
    width: 278,
  },
  backParent: {
    top: 184,
    left: 20,
    width: 319,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  lodyOreo: {
    marginLeft: -45.5,
    top: 119,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  image10Icon: {
    width: 101,
    height: 101,
    marginLeft: -50.5,
    left: "50%",
  },
  lodyOreoParent: {
    marginTop: 20,
  },
  sliderPrzekasek: {
    marginLeft: 4,
    top: 0,
  },
  sliderPrzekasek1: {
    marginLeft: -179,
    top: 15,
    height: 542,
  },
  sliderPrzekasekParent: {
    flexDirection: 'row', // Ustawia układ w poziomie
    justifyContent: 'space-between',
    marginLeft: -261,
    top: 276,
    width: 358,
    height: 748,
    left: "50%",
    position: "absolute",
  },
  line: {
    borderRadius: 575,
    backgroundColor: Color.colorWhite,
    width: 169,
    height: 5,
  },
  iphoneIndicator: {
    bottom: 0,
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
    marginLeft: -293,
    bottom: -152,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: "#141414",
    height: 142,
    left: "50%",
    overflow: "hidden",
  },
  headerEkranuPrzeksekParent: {
    top: 5,
    left: 3,
    height: 733,
    width: 578,
    position: "absolute",
  },
  text: {
    fontSize: 19,
    color: Color.colorWhite,
    width: 43,
    height: 20,
    textAlign: "left",
  },
  wzr: {
    backgroundColor: "#000",
    flex: 1,
    overflow: "hidden",
    height: 1500
  },
  sss:{
    flexDirection: 'row',
    flexWrap: 'wrap', // Pozwala elementom zawijać się na następny wiersz, jeśli nie mieszczą się na ekranie
    justifyContent: 'space-between',
  }
});