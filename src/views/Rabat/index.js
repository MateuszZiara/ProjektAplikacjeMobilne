import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";

export function Rabat({ navigation }) {
  return (
    <View style={styles.grzechotnikFinal1}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={[styles.maskGroupParent, styles.parentFlexBox]}>
          <Image
            style={styles.maskGroupIcon1}
            contentFit="cover"
            source={require("./assets/mask-group.png")}
          />
          <Text style={styles.garyLee}>{`Powrót do strony głównej `}</Text>
        </View>
      </View>
      <Image
        style={styles.grzechotnikFinalChild}
        contentFit="cover"
        source={require("./assets/ellipse-19.png")}
      />
      <View style={[styles.duyPopcornParent, styles.parentPosition]}>
        <Text style={styles.duyPopcorn}>Duży popcorn</Text>
        <View style={[styles.zParent, styles.parentPosition]}>
          <Text style={styles.z}>18 zł</Text>
          <Text style={styles.z1}>13 zł</Text>
        </View>
        <Image
          style={styles.closeUpDeliciousSaltedPopcIcon}
          contentFit="cover"
          source={require("./assets/closeupdelicioussaltedpopcornreadybeservedtransformed-1.png")}
        />
      </View>
      <View style={[styles.backParent, styles.parentFlexBox]}>
        <Image
          style={styles.backIcon1}
          contentFit="cover"
          source={require("./assets/back.png")}
        />
        <Text style={[styles.grzechotnik, styles.grzechotnikFlexBox]}>
          Oto twój wygrzechotany rabat!
        </Text>
      </View>
      <Text
        style={[styles.kuponJestWany1, styles.grzechotnikFlexBox]}
      >{`Kupon jest ważny do 23:59
Kupon może być wykorzystany tylko raz`}</Text>
    </View>
  );
};