/* fonts */
import {StyleSheet} from "react-native";

export const FontFamily = {
  poppinsMedium: "Poppins-Medium",
  poppinsSemiBold: "Poppins-SemiBold",
};
/* Colors */
export const Color = {
  colorWhite: "#fff",
};
export const styles = StyleSheet.create({
  potwierdzonePosition: {
    left: 0,
    position: "absolute",
  },
  potwierdzoneFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
    width: 322,
  },
  garyLeeTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  twojeZamwienieZostao: {
    fontSize: 20,
    height: 20,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  appName: {
    height: 151,
    paddingHorizontal: 0,
    paddingVertical: 5,
    justifyContent: "center",
    overflow: "hidden",
  },
  appNameWrapper: {
    top: 0,
    height: 103,
    justifyContent: "center",
  },
  potwierdzone: {
    top: 127,
    fontSize: 40,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    height: 86,
    left: 0,
    position: "absolute",
  },
  frameParent: {
    top: 356,
    left: 42,
    height: 213,
    width: 322,
    position: "absolute",
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
    fontSize: 17,
    lineHeight: 26,
    color: "#0c0c0c",
    textAlign: "left",
    width: 226,
    height: 26,
    marginLeft: 21,
  },
  maskGroupParent: {
    top: 22,
    left: 31,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
    position: "absolute",
  },
  rectangleParent: {
    top: 648,
    left: 21,
    position: "absolute",
  },
  wzrChild: {
    top: 116,
    left: 53,
    width: 269,
    height: 240,
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