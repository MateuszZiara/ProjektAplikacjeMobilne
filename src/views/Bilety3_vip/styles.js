/* fonts */
import {StyleSheet} from "react-native";

/* font sizes */
export const FontSize = {
  extraSmall_size: 12,
  size_mid: 17,
  size_high: 25,
};
/* Colors */
export const Color = {
  grayGray7: "#495057",
  colorLightgray: "#ced4da",
  colorBlueviolet: "rgba(133, 76, 255, 0.74)",
  colorWhite: "#fff",
  colorWhitesmoke: "#ececec",
  grayGray5: "#adb5bd",
};
/* Paddings */
export const Padding = {
  p_12xs: 1,
  p_8xs: 5,
};
/* border radiuses */
export const Border = {
  br_9xs: 4,
  br_11xl: 30,
};

export const styles = StyleSheet.create({
  navigationBarPosition: {
    left: "50%",
    overflow: "hidden",
  },
  wrapperParentFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconLayout: {
    height: 35,
    width: 35,
  },
  sliderLayout: {
    height: 186,
    width: 578,
  },
  sliderPosition: {
    top: 0,
    position: "absolute",
  },
  image2IconPosition: {
    height: 184,
    top: 0,
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
  frameItem: {
    borderRadius: 20,
    backgroundColor: "#d9d9d9",
    width: 185,
    height: 89,
    zIndex: 0,
  },
  maskGroupIcon3: {
    marginLeft: 21,
  },
  garyLee: {
    lineHeight: 26,
    color: "#0c0c0c",
    width: 105,
  },
  garyLeeTypo: {
    height: 53,
    top: 10,
    left:23,
    marginTop:10,
    fontWeight: "500",
    fontSize: FontSize.size_high,
    textAlign: "center",

  },
  garyLeeParent: {
    top: 16,
    left: 14,
    width: 154,
    height: 56,
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  ustawieniaTypo: {
    textAlign: "left",
    color: Color.colorWhitesmoke,
    fontSize: FontSize.size_mid,
    width: 322,
    fontWeight: "500",
  },
  biletyTypo: {
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorWhitesmoke,
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  textTypo1: {
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "600",
    position: "absolute",
  },
  backIconLayout: {
    height: 20,
    width: 20,
    top: 35,
    position: "absolute",
  },
  instanceParentPosition: {
    left: 70,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    lineHeight: 19,
    textAlign: "left",
  },
  frameWrapperFlexBox: {
    padding: Padding.p_12xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  navigationBarChild: {
    top: 20,
    left: 233,
    borderRadius: 13,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 58,
    height: 59,
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
    position: "absolute",
  },
  image2Icon: {
    left: 3,
    width: 434,
  },
  sliderChild: {
    backgroundColor: "transparent",
    left: 0,
    width: 578,
    height: 184,
  },
  sliderItem: {
    left: 21,
    width: 367,
    height: 40,
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
    height: 186,
    width: 578,
  },
  headerEkranuPrzeksek: {
    left: -3,
    position: "absolute",
  },
  backIconLayout1: {
    height: 30,
    width: 30,
  },
  ustawienia: {
    height: 26,
    width: 322,
  },
  ustawieniaKonta: {
    fontSize: 30,
    lineHeight: 77,
    width: 286,
    height: 55,
    marginTop: -22,
  },
  appName: {
    width: 278,
  },
  appNameWrapper: {
    height: 66,
    width: 278,
    justifyContent: "center",
  },
  frameWrapper: {
    marginLeft: 17,
    width: 278,
  },
  backParent: {
    top: 205,
    left: 23,
    width: 319,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  dlaCiebieI: {
    height: 53,
    width: 322,
  },
  bilety: {
    fontSize: 33,
    marginTop: -29,
    width: 322,
  },
  appName1: {
    width: 267,
  },
  appNameContainer: {
    width: 258,
    height: 111,
    justifyContent: "center",
  },
  frameContainer: {
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
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent: {
    top: 60,
    left: 32,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  listopad: {
    top: 30,
    left: 145,
    fontSize: 20,
  },
  text: {
    top: 6,
    left: 169,
    fontSize: 16,
  },
  backIcon1: {
    left: 115,
  },
  backIcon2: {
    left: 242,
  },
  su: {
    color: Color.colorBlueviolet,
  },
  suWrapper: {
    height: 19,
    width: 34,
    justifyContent: "center",
  },
  instanceParent: {
    top: 96,
    paddingBottom: Padding.p_8xs,
  },
  text1: {
    color: Color.grayGray7,
    fontWeight: "500",
    lineHeight: 19,
  },
  wrapper: {
    borderRadius: Border.br_9xs,
    width: 32,
    height: 32,
    justifyContent: "center",
  },
  text7: {
    color: Color.colorLightgray,
    fontWeight: "500",
    lineHeight: 19,
  },
  instanceGroup: {
    top: 120,
  },
  groupChild: {
    top: 2,
    left: 2,
    borderRadius: 6,
    height: 30,
    width: 30,
    backgroundColor: "transparent",
  },
  frameWrapper10: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    height: 34,
    width: 34,
    marginTop:50,
    marginLeft:100,
  },
  instanceContainer: {
    top: 154,
  },
  instanceParent1: {
    top: 188,
  },
  instanceParent2: {
    top: 222,
  },
  instanceParent3: {
    top: 256,
  },
  instanceParent4: {
    top: 290,
  },
  listopadParent: {
    marginLeft: -188,
    top: 327,
    borderRadius: 35,
    backgroundColor: "rgba(106, 106, 106, 0.26)",
    width: 377,
    height: 377,
    left: "50%",
    overflow: "hidden",
  },
  wybprDaty: {
    backgroundColor: "#0c0c0c",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },

});