import * as React from "react";
import { Image } from "expo-image";
import {StyleSheet, View, ScrollView, Text, TouchableOpacity, TextInput} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles"
import {Bilety3_vip} from "../Bilety3_vip";
import {useState} from "react";
import Ticket from "../../Classes/Ticket";
import {Bilety1} from "../Bilety1";

export function Bilety2_vip({ navigation }) {
  const [number, setNumber] = useState(0);

  function sub()
  {
    if(number === 0)
    {

    }
    else
    {
      setNumber(number-1);
    }
  }
  const getDynamicText = () => {
    if (Ticket.id === 1) {
      return 'VIP';
    } else if (Ticket.id === 2) {
      return 'Ulgowy';
    } else if (Ticket.id === 3) {
      return 'Normalny';
    } else {
      return 'Rodzinny';
    }
  };
  const getDynamicValue = () => {
    if (Ticket.id === 1) {
      return 50;
    } else if (Ticket.id === 2) {
      return 15;
    } else if (Ticket.id === 3) {
      return 30;
    } else {
      return 65;
    }
  }
  const getDynamicImage = () => {
    if (Ticket.id === 1) {
      return require('./assets/mask-group2.png');
    } else if (Ticket.id === 2) {
      return require('../Bilety1/assets/mask-group1.png');
    } else if (Ticket.id === 3) {
      return require('../Bilety1/assets/mask-group2.png');
    } else {
      return require('../Bilety1/assets/mask-group3.png');
    }
  };
  const onChangeText = (newText)=>{
    /*
      If text is above or below length of limits then exit function
    */
    if(newText < 0)
    {
      setNumber(0);
      newText = 0;
      return;
    }
    if (newText > 20){
      setNumber(19);
      newText = 19;
      return;
    }

    // Else update text
    setNumber(newText);
  }
  function add()
  {
    if(number === 19)
    {
      return;
    }
    else
    {
      setNumber(number + 1);
    }
  }
  return (
      <ScrollView style={{ flex: 1 }}>
    <View style={styles.wzr}>

      <View style={[styles.headerEkranuPrzeksek, styles.sliderLayout]}>
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
      </View>
      <View
        style={[
          styles.iphonestatusbarOgranicznik,
          styles.iphonestatusbarPosition,
        ]}
      >


      </View>
      <View style={[styles.biletVipParent, styles.parentBg]}>
        <Text style={[styles.biletVip, styles.zTypo]}>
          {
            getDynamicText()
          }

        </Text>
        <Text style={[styles.z, styles.zTypo]}>{number * getDynamicValue()} zł</Text>
        <Image
            style={styles.maskGroupIcon2}
            contentFit="cover"
            source={getDynamicImage()}
        />

        <View style={[styles.parent, styles.parentBg]}>
          <TouchableOpacity onPress={() => sub()}>
          <View style={styles.view}>
            <LinearGradient
              style={[styles.child, styles.childPosition]}
              locations={[0, 1]}
              colors={["rgba(252, 252, 252, 0.2)", "rgba(123, 122, 122, 0.2)"]}
            />
            <Text style={[styles.text1, styles.textTypo]}>-</Text>
          </View>
          </TouchableOpacity>
          <View style={[styles.counter, styles.view1ShadowBox]}>
            <View style={[styles.counterChild, styles.childPosition]} />
            <Text style={[styles.text2, styles.textTypo]} onChangeText={value => onChangeText(value)}>{number}</Text>
          </View>
          <TouchableOpacity onPress={() => add()}>
          <View style={[styles.view1, styles.view1ShadowBox]}>
            <LinearGradient
              style={[styles.child, styles.childPosition]}
              locations={[0, 1]}
              colors={["rgba(136, 243, 28, 0.2)", "rgba(82, 158, 5, 0.2)"]}
            />

            <Text style={[styles.text3, styles.textTypo]}>+</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.backParent}>
        <TouchableOpacity onPress={() => navigation.navigate(Bilety1)}>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          pres
          source={require("./assets/back.png")}
        />
        </TouchableOpacity>
        <View style={[styles.frameWrapper, styles.frameFlexBox]}>
          <View style={styles.appNameWrapper}>
            <View style={[styles.appName, styles.appSpaceBlock]}>
              <Text style={[styles.ustawienia, styles.ustawieniaClr]}>
                Bilety
              </Text>
              <Text style={[styles.ustawieniaKonta, styles.biletyTypo]}>
                {getDynamicText()}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.appNameContainer}>
            <View style={[styles.appName1, styles.appSpaceBlock]}>
              <Text style={[styles.dlaCiebieI, styles.garyLeeTypo]}>
                Dla ciebie i dla rodziny
              </Text>
              <Text style={[styles.bilety, styles.biletyTypo]}>Bilety</Text>
            </View>
          </View>
        </View>
        <View style={styles.vectorWrapper}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("./assets/ellipse-19.png")}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() =>navigation.navigate(Bilety3_vip)}>

      <View style={styles.rectangleParent}>
        <View style={styles.frameItem} />
        <View style={styles.garyLeeParent}>
          <Text style={[styles.garyLee, styles.garyLeeTypo]}>Wybierz seans</Text>
          <Image
            style={[styles.maskGroupIcon3, styles.iconLayout]}
            contentFit="cover"
            source={require("./assets/mask-group3.png")}
          />

        </View>
      </View>
      </TouchableOpacity>
    </View>
      </ScrollView>
  );
}


