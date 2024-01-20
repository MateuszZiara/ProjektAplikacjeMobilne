import * as React from "react";
import { Image } from "expo-image";
import { View, Text,ScrollView,TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles";
import {Zatwierdz_platnosc} from "../Zatwierdz_platnosc";
import {NavigationContainer} from "@react-navigation/native";
import TabNav from "../../navigation/Tab";


export function Koszyk_karta({ navigation }){
  return (

      <NavigationContainer independent={true}>
        <View style={{ flex: 1 }}>

        <ScrollView>
    <View style={styles.wzr}>
      <View style={[styles.headerEkranuPrzeksek1, styles.sliderLayout]}>
        <View style={[styles.slider, styles.sliderLayout]}>
          <Image
            style={[styles.image2Icon, styles.image2IconPosition]}
            contentFit="cover"
            source={require("./assets/image-2.png")}
          />
          <LinearGradient
            style={[styles.sliderChild, styles.image2IconPosition]}
            locations={[0, 0.48, 1]}
            colors={[
              "rgba(0, 0, 0, 0.5)",
              "rgba(255, 255, 255, 0)",
              "rgba(0, 0, 0, 0.5)",
            ]}
          />
          <View style={styles.sliderItem} />
          <LinearGradient
            style={styles.sliderInner}
            locations={[0.53, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
          />
        </View>
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={[styles.frameWrapper, styles.frameFlexBox]}>
            <View style={styles.appNameWrapper}>
              <View style={[styles.appName, styles.appSpaceBlock]}>
                <Text style={styles.zamwienie}>Zamówienie</Text>
                <Text style={[styles.patno, styles.patnoTypo]}>Płatność</Text>
              </View>
            </View>
          </View>
          <View style={[styles.vectorWrapper, styles.parentFlexBox]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("./assets/ellipse-19.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.frameItem} />
        <View style={[styles.maskGroupParent, styles.kartaVisaItemPosition]}>
          <Image
            style={styles.maskGroupIcon1}
            contentFit="cover"
            source={require("./assets/mask-group.png")}
          />
          <TouchableOpacity onPress={() =>navigation.navigate(Zatwierdz_platnosc)}>
          <Text style={[styles.garyLee, styles.garyLeeTypo]}>
            Zatwierdź płatność
          </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.karty, styles.parentFlexBox]}>
        <LinearGradient
          style={styles.kartaVisa}
          locations={[0, 1]}
          colors={["#0047ff", "rgba(187, 148, 9, 0)"]}
        >
          <LinearGradient
            style={[styles.kartaVisaChild, styles.kartaLayout]}
            locations={[0, 1]}
            colors={["#0047ff", "rgba(187, 148, 9, 0)"]}
          />
          <LinearGradient
            style={[styles.kartaVisaItem, styles.kartaLayout]}
            locations={[0, 1]}
            colors={["#0047ff", "rgba(187, 148, 9, 0)"]}
          />
          <Text style={[styles.visa, styles.visaTypo]}>VISA</Text>
          <Text style={[styles.text6, styles.text6FlexBox]}>
            1234 5678 9012 3456
          </Text>
          <Text style={[styles.text7, styles.textTypo]}>05/28</Text>
        </LinearGradient>
        <LinearGradient
          style={styles.kartaVisa1}
          locations={[0, 1]}
          colors={["#0047ff", "rgba(187, 148, 9, 0)"]}
        >
          <LinearGradient
            style={[styles.kartaVisaChild, styles.kartaLayout]}
            locations={[0, 1]}
            colors={["#0047ff", "rgba(187, 148, 9, 0)"]}
          />
          <LinearGradient
            style={[styles.kartaVisaItem, styles.kartaLayout]}
            locations={[0, 1]}
            colors={["#0047ff", "rgba(187, 148, 9, 0)"]}
          />
          <Text style={[styles.visa, styles.visaTypo]}>VISA</Text>
          <Text style={[styles.text6, styles.text6FlexBox]}>
            1234 5678 9012 3456
          </Text>
          <Text style={[styles.text7, styles.textTypo]}>05/28</Text>
        </LinearGradient>
        <LinearGradient
          style={styles.kartaVisa1}
          locations={[0, 1]}
          colors={["#9d0000", "rgba(255, 199, 0, 0.38)"]}
        >
          <LinearGradient
            style={[styles.kartaVisaChild, styles.kartaLayout]}
            locations={[0, 1]}
            colors={["#ff0000", "rgba(255, 199, 0, 0)"]}
          />
          <LinearGradient
            style={[styles.kartaVisaItem, styles.kartaLayout]}
            locations={[0, 1]}
            colors={["#ff0000", "rgba(255, 199, 0, 0)"]}
          />
          <Text style={[styles.mastercard, styles.visaTypo]}>Mastercard</Text>
          <Text style={[styles.text6, styles.text6FlexBox]}>
            1234 5678 9012 3456
          </Text>
          <Text style={[styles.text7, styles.textTypo]}>05/28</Text>
        </LinearGradient>
        <LinearGradient
          style={styles.kartaVisa1}
          locations={[0, 1]}
          colors={["#1253fc", "#b40578"]}
        >
          <LinearGradient
            style={[styles.kartaVisaChild, styles.kartaLayout]}
            locations={[0, 1]}
            colors={["#0047ff", "rgba(187, 148, 9, 0)"]}
          />
          <LinearGradient
            style={[styles.kartaVisaItem, styles.kartaLayout]}
            locations={[0, 1]}
            colors={["#0047ff", "#b709bb"]}
          />
          <Text style={[styles.dodajNowKart1, styles.visaTypo]}>
            Dodaj nową kartę
          </Text>
        </LinearGradient>
      </View>
      <View style={[styles.backParent, styles.parentFlexBox]}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Koszyk_platnosc')}>
        <Image
          style={styles.backIcon1}
          contentFit="cover"
          source={require("./assets/back.png")}
        />
      </TouchableWithoutFeedback>
        <View style={[styles.frameView, styles.frameFlexBox]}>
          <View style={styles.appNameFrame}>
            <View style={[styles.appName1, styles.appSpaceBlock]}>
              <Text style={[styles.zamwienie1, styles.garyLeeTypo]}>{`Zamówienie
`}</Text>
              <Text style={[styles.ustawieniaKonta, styles.patnoTypo]}>
                Płatności
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.patnoKartGotwkaPrzyContainer, styles.oOOOTypo]}>
          <Text style={styles.patnoKart}>Płatność kartą </Text>
          <Text style={styles.gotwkaPrzyKasie}>Gotówka przy kasie </Text>
          <Text style={styles.blik}>BLIK                           </Text>

      </Text>
      <View style={styles.sliderNav}>
        <View style={[styles.view, styles.viewLayout]} />
        <View style={[styles.view1, styles.viewLayout]} />
        <View style={styles.curr1} />
      </View>
    </View>
  </ScrollView>
          <View style={{marginBottom: 47}}>
            <TabNav navigation={navigation} />
          </View>
        </View>
      </NavigationContainer>
  );
}