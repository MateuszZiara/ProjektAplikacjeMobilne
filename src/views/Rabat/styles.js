/* fonts */
import {StyleSheet} from "react-native";

export const FontFamily = {
  poppinsBold: "Poppins-Bold",
  poppinsSemiBold: "Poppins-SemiBold",
  poppinsMedium: "Poppins-Medium",
};
/* font sizes */
export const FontSize = {
  size_lg: 18,
};
/* Colors */
export const Color = {
  colorWhitesmoke: "#f5f5f5",
  colorLightgray: "#cbcbcb",
};
export const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  parentPosition: {
    left: "50%",
    position: "absolute",
  },
  grzechotnikFlexBox: {
    textAlign: "center",
    color: Color.colorWhitesmoke,
  },
  frameChild: {
    borderRadius: 20,
    backgroundColor: "#fff",
    width: 370,
    height: 89,
    zIndex: 0,
  },
  maskGroupIcon1: {
    width: 35,
    height: 35,
  },
  garyLee: {
    fontSize: 17,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: "#0c0c0c",
    width: 226,
    height: 26,
    marginLeft: 21,
    textAlign: "left",
  },
  maskGroupParent: {
    marginTop: -17.5,
    top: "50%",
    left: 31,
    alignItems: "center",
    zIndex: 1,
  },
  rectangleParent: {
    top: 648,
    left: 21,
    position: "absolute",
  },
  grzechotnikFinalChild: {
    top: 163,
    left: 42,
    width: 312,
    height: 312,
    position: "absolute",
  },
  duyPopcorn: {
    marginLeft: -64,
    top: 240,
    color: Color.colorLightgray,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  z: {
    marginLeft: -41.5,
    textDecoration: "line-through",
    top: 0,
    color: Color.colorLightgray,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  z1: {
    marginLeft: 4.5,
    color: Color.colorWhitesmoke,
    top: 0,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  zParent: {
    marginLeft: -41,
    top: 267,
    width: 83,
    height: 27,
  },
  closeUpDeliciousSaltedPopcIcon: {
    top: 7,
    left: 68,
    width: 151,
    height: 219,
    position: "absolute",
  },
  duyPopcornParent: {
    marginLeft: -144,
    top: 182,
    borderRadius: 35,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    width: 288,
    height: 308,
    overflow: "hidden",
  },
  backIcon1: {
    width: 30,
    height: 30,
  },
  grzechotnik: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 322,
    height: 53,
    marginLeft: 15,
  },
  backParent: {
    top: 110,
    left: 16,
  },
  kuponJestWany1: {
    marginLeft: -185,
    top: 534,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  grzechotnikFinal1: {
    backgroundColor: "#000",
    flex: 1,
    width: "100%",
    height: 896,
  },
});