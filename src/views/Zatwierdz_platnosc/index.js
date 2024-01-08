import * as React from "react";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";
import { Image } from "expo-image";

import {styles} from "./styles";
import {Home} from "../Home";
export function Zatwierdz_platnosc({ navigation }){
  return (
    <View style={styles.wzr}>
      <View style={styles.frameParent}>
        <View style={[styles.appNameWrapper, styles.potwierdzonePosition]}>
          <View style={styles.appName}>
            <Text
              style={[styles.twojeZamwienieZostao, styles.potwierdzoneFlexBox]}
            >
              Twoje zamówienie zostało
            </Text>
          </View>
        </View>
        <Text style={[styles.potwierdzone, styles.potwierdzoneFlexBox]}>
          Potwierdzone
        </Text>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={styles.maskGroupParent}>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require("./assets/mask-group.png")}
          />
          <TouchableOpacity onPress={() =>navigation.navigate(Home)}>
          <Text
            style={[styles.garyLee, styles.garyLeeTypo]}>{`Powrót do strony głównej `}
          </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        style={styles.wzrChild}
        contentFit="cover"
        source={require("./assets/group-6872.png")}
      />
    </View>
  );
};




