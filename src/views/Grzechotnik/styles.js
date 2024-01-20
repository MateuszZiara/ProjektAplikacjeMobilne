/* fonts */
import {StyleSheet} from "react-native";

export const FontFamily = {
  poppinsMedium: "Poppins-Medium",
};
/* Colors */
export const Color = {
  colorWhite: "#fff",
};

export const styles = StyleSheet.create({
  grzechotnikTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  image8Icon: {

    left: 0,
    width: 951,
    height: 900,
    position: "absolute",
  },
  grzechotnik: {
    marginLeft: -161,
    top: 98,
    left: "50%",
    fontSize: 20,
    textAlign: "center",
    width: 322,
    height: 53,
  },

  backIcon: {
    top: 110,
    left: 16,
    width: 30,
    height: 30,
    position: "absolute",
  },
  zagrzechotaj: {
    top: 50,
    left: 266,
    fontSize: 19,
    textAlign: "left",
  },
  grzechotnikShake: {
    backgroundColor: "#000",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
  button: {
    width:50,
    height:50,
  },
  text: {
    textAlign:"center",
    top:150,
  },
  mackaImage: {
    width: "75%",
    height: "75%",
    left:75,
    marginTop:100,
  },
});