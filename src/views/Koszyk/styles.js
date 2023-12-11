/* fonts */
import {StyleSheet} from "react-native";

/* font sizes */
export const FontSize = {
  size_mid: 17,
  size_lg: 18,
  size_3xl: 22,
  size_7xs: 6,
};
/* Colors */
export const Color = {
  colorBlack: "#000",
  colorGray_100: "rgba(255, 255, 255, 0.1)",
  colorWhite: "#fff",
  colorWhitesmoke: "#ececec",
  colorLightgray: "#cbcbcb",
};
/* Paddings */
export const Padding = {
  p_8xs: 5,
};
/* border radiuses */
export const Border = {
  br_16xl: 30,
  br_11xl: 30,
};

export const styles = StyleSheet.create({
  wzrLayout: {
    width: "100%",
    overflow: "hidden",
  },
  navigationBarLayout: {
    width: 430,
    bottom: 0,
  },
  frameParentFlexBox: {

    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    height: 35,
    width: 35,
  },
  headerPosition: {
    left: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontWeight: "600",
  },
  childLayout: {
    height: 59,
    position: "absolute",
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
  sliderItemPosition: {
    marginTop:75,
    left: 21,
    position: "absolute",
  },
  appSpaceBlock: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: 0,
    height: 106,
    justifyContent: "center",
    overflow: "hidden",
  },
  koszyk_items: {
    height:400,
  },
  koszyk_gb: {
    textAlign:"center",
    margin:"auto",
  },
  zamwienieLayout: {
    width: 322,
    color: Color.colorWhitesmoke,
  },
  garyLeeTypo: {
    height: 26,
    fontWeight: "500",
    fontSize: FontSize.size_mid,
    textAlign: "left",
  },
  parentLayout: {
    width: 250,
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_16xl,
    height: 130,
    overflow: "hidden",
  },
  xFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  zTypo: {

    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  parentPosition: {
    left: 31,
    position: "absolute",
  },
  z5Typo: {
    top: 11,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    color: Color.colorWhitesmoke,
    textAlign: "left",
    position: "absolute",
  },
  popcornactiveIcon: {
    marginLeft: 37,
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
    overflow: "hidden",
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
    fontSize: FontSize.size_7xs,
    color: Color.colorWhite,
    width: 3,
    height: 7,
    display: "none",
    top: "50%",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  maskGroup: {
    top: 0,
    height: 35,
    width: 35,
  },
  homeinactiveParent: {
    width: 368,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    left: 31,
    position: "absolute",
    top: 18,
  },
  line: {
    borderRadius: 575,
    width: 169,
    height: 5,
    backgroundColor: Color.colorWhite,
  },
  iphoneIndicator: {
    height: 32,
    paddingHorizontal: 101,
    paddingVertical: 48,
    justifyContent: "center",
    alignItems: "center",
    width: 430,
    bottom: 0,
  },
  navigationBarChild: {
    top: 20,
    left: 114,
    borderRadius: 13,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 58,
    overflow: "hidden",
  },
  navigationBar: {
    marginLeft: -215,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: "#141414",
    height: 142,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
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
  },
  sliderItem: {
    width: 367,
    height: 40,
    top: 0,
  },
  sliderInner: {
    top: 121,
    left: 1,
    width: 375,
    height: 65,
  },
  headerEkranuPrzeksek: {
    height: 186,
    width: 578,
    top: 0,
  },
  twojeKonto: {
    height: 53,
    fontWeight: "500",
    fontSize: FontSize.size_mid,
    width: 322,
    textAlign: "left",
  },
  zamwienie: {
    fontSize: 33,
    marginTop: -29,
    textAlign: "left",
    fontWeight: "600",
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
    height: 73,
    alignItems: "center",
  },
  frameChild: {
    width: 71,
    height: 71,
  },
  vectorWrapper: {
    top: -4,
    left: -4,
    borderRadius: 50,
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.14)",
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  frameContainer: {
    width: 55,
    marginLeft: 82,
    height: 55,
  },
  frameParent: {
    top: 58,
    left: 29,
    justifyContent: "center",
    alignItems: "center",
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
    textAlign: "left",
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
  frameView: {
    marginLeft: 17,
    width: 278,
    height: 73,
    alignItems: "center",
  },
  backParent: {
    top: 184,
    left: 60,
    width: 294,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  headerEkranuPrzeksekParent: {
    height: 257,
    width: 578,
    top: 0,
  },
  duyPopcorn: {
    marginLeft: -32.5,
    width: 203,
    color: Color.colorLightgray,
    fontSize: FontSize.size_3xl,
    top: 27,
    display: "flex",
    textAlign: "left",
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  z: {
    top: 64,
    marginLeft: 26.5,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    color: Color.colorLightgray,
  },
  closeUpDeliciousSaltedPopcIcon: {
    width: 70,
    height: 101,
    top: 0,
  },
  groupChild: {
    top: -9,
    left: -15,
    width: 77,
  },
  x: {
    marginTop: -11.5,
    marginLeft: -10.5,
    color: Color.colorBlack,
    width: 21,
    height: 24,
    display: "flex",
    alignItems: "center",
    top: "50%",
  },
  ellipseParent: {
    top: 59,
    left: 67,
    width: 43,
    height: 43,
    position: "absolute",
  },
  duyPopcornParent: {
    height: 109,
  },
  biletUlgowy: {
    marginLeft: -25.5,
    width: 196,
    color: Color.colorLightgray,
    fontSize: FontSize.size_3xl,
    top: 27,
    display: "flex",
    textAlign: "left",
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  z1: {
    top: 64,
    marginLeft: 26.5,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    color: Color.colorLightgray,
    display: "none",
  },
  maskGroupIcon2: {
    left: 30,
    width: 73,
    height: 73,
    top: 18,
    position: "absolute",
  },
  biletUlgowyParent: {
    marginTop: 20,
    height: 109,
  },
  image28Icon: {
    top: 7,
    left: 13,
    width: 111,
    height: 109,
    position: "absolute",
  },
  groupItem: {
    top: -1,
    left: -1,
    width: 329,
    height: 2,
    position: "absolute",
  },
  z5: {
    left: 275,
  },
  doZapaty: {
    left: 2,
  },
  vectorParent: {
    width: 327,
    height: 38,
    marginTop: 20,
  },
  zestaw: {
    top:10,
    left: 100,
    height: 150,
  },
  itemContainer: {
    flexDirection: 'row', // Ustawienie kierunku rozmieszczenia elementów na osi głównej na poziomy
    alignItems: 'center', // Wyśrodkowanie elementów na osi poprzecznej
    marginBottom: 10, // Dodaj margines na dole, aby oddzielić od kolejnego elementu, jeśli jest potrzebny
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 5,
    marginRight: 10, // Dodaj margines z prawej strony obrazu, aby oddzielić od tekstu
  },
  textContainer: {
    flex: 1, // Pozwala tekstowi zajmować dostępną przestrzeń
  },
  groupParent: {
    top: 21,
    left: 3,
    height: 610,
    width: 578,
    position: "absolute",
  },
  frameItem: {
    borderRadius: 20,
    width: 370,
    height: 89,
    zIndex: 0,
    backgroundColor: Color.colorWhite,
  },
  maskGroupIcon3: {
    width: 40,
    height: 40,
  },
  garyLee: {
    lineHeight: 26,
    color: "#0c0c0c",
    width: 182,
    marginLeft: 21,
  },
  maskGroupParent: {
    top: 22,
    zIndex: 1,
    alignItems: "center",
    left: 31,
    position: "absolute",
  },
  rectangleParent: {
    top: 648,
  },
  wzr: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 896,
    overflow: "hidden",
  },
});
