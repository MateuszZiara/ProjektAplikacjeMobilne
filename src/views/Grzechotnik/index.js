import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "./styles.js";
import { styles } from "./styles.js";

export function Grzechotnik({ navigation }) {
  return (
    <View style={styles.grzechotnikShake}>
      <Image
        style={styles.image8Icon}
        contentFit="cover"
        source={require("./assets/image-8.png")}
      />
      <Image
        style={styles.d6688b6a38d34b6fB2976b8248Icon}
        contentFit="cover"
        source={require("./assets/-d6688b6a38d34b6fb2976b8248b0a490transformed-1.png")}
      />
      <Text style={[styles.grzechotnik, styles.grzechotnikTypo]}>
        Zagrzechotaj telefonem, aby wylosował rabat
      </Text>
      <Image
        style={styles.backIcon}
        contentFit="cover"
        source={require("./assets/back.png")}
      />
      <Text style={[styles.zagrzechotaj, styles.grzechotnikTypo]}>
        Zagrzechotaj
      </Text>
    </View>
  );
};
