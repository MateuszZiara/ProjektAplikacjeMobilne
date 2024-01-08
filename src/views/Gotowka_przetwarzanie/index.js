import * as React from "react";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

import {styles} from "./styles";
import {Home} from "../Home";
export function Gotowka_przetwarzanie({ navigation }){
  return (
    <View style={[styles.wzr, styles.wzrLayout]}>
      <View style={styles.frameParent}>
        <View style={styles.appNameWrapper}>
          <View style={styles.appName}>
            <Text style={styles.twojeZamwienieJest}>
              Twoje zamówienie jest właśnie
            </Text>
          </View>
        </View>
        <Text style={[styles.przetwarzane, styles.textTypo]}>Przetwarzane</Text>
      </View>
      <View style={[styles.rectangleParent, styles.sliderItemPosition]}>
        <View style={styles.frameChild} />
        <View style={[styles.maskGroupParent, styles.groupParentFlexBox]}>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require("./assets/mask-group.png")}
          />
          <TouchableOpacity onPress={() =>navigation.navigate(Home)}>
          <Text
            style={[styles.garyLee, styles.garyTypo]}>{`Powrót do strony głównej `} </Text>
          </TouchableOpacity>

        </View>
      </View>
      <Image
        style={styles.wzrChild}
        contentFit="cover"
        source={require("./assets/group-6872.png")}
      />
      <Text style={[styles.zazwyczajZamwieniaPrzetwarz, styles.textFlexBox]}>
        Zazwyczaj zamówienia przetwarzamy w ciągu 15 minut
      </Text>
      <View style={[styles.wzr1, styles.wzrLayout]}>
        <View style={[styles.headerEkranuPrzeksek, styles.sliderLayout]}>
          <View style={[styles.slider, styles.sliderLayout]}>
            <Image
              style={[styles.image2Icon, styles.image2IconPosition]}
              contentFit="cover"
              source={require("./assets/image-2.png")}
            />
            <LinearGradient
              style={[styles.sliderChild, styles.sliderBg]}
              locations={[0, 0.48, 1]}
              colors={[
                "rgba(0, 0, 0, 0.5)",
                "rgba(255, 255, 255, 0)",
                "rgba(0, 0, 0, 0.5)",
              ]}
            />
            <View style={[styles.sliderItem, styles.sliderItemPosition]} />
            <LinearGradient
              style={[styles.sliderInner, styles.sliderBg]}
              locations={[0.53, 1]}
              colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
            />
          </View>
          <View style={[styles.frameGroup, styles.groupParentFlexBox]}>
            <View style={[styles.frameWrapper, styles.frameFlexBox]}>
              <View style={styles.appNameContainer}>
                <View style={[styles.appName1, styles.appSpaceBlock]}>
                  <Text style={styles.twojeKonto}>Twoje konto</Text>
                  <Text style={[styles.zamwienie, styles.textTypo]}>
                    Zamówienie
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.koszykParent}>
              <View style={[styles.koszyk, styles.iconLayout]}>
                <View style={[styles.maskGroup, styles.iconLayout]}>
                  <Image
                    style={styles.maskGroupChild}
                    contentFit="cover"
                    source={require("./assets/group-1597883025.png")}
                  />
                  <Image
                    style={styles.maskGroupItem}
                    contentFit="cover"
                    source={require("./assets/group-1597883024.png")}
                  />
                  <Image
                    style={styles.maskGroupInner}
                    contentFit="cover"
                    source={require("./assets/ellipse-1.png")}
                  />
                  <Text style={[styles.text, styles.textFlexBox]}>2</Text>
                </View>
              </View>
              <View style={[styles.vectorWrapper, styles.groupParentFlexBox]}>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require("./assets/ellipse-19.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.navigationBar, styles.navigationBarPosition]}>
          <View style={[styles.homeinactiveParent, styles.groupParentFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("./assets/homeinactive.png")}
            />
            <Image
              style={[styles.popcornactiveIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/popcornactive.png")}
            />
            <Image
              style={[styles.popcornactiveIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/mask-group1.png")}
            />
            <Image
              style={[styles.popcornactiveIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("./assets/mask-group2.png")}
            />
          </View>
          <View style={styles.navigationBarChild} />
          <View style={[styles.iphoneIndicator, styles.navigationBarPosition]}>
            <View style={styles.line} />
          </View>
        </View>
        <View style={[styles.backParent, styles.groupParentFlexBox]}>
          <Image
            style={styles.backIcon}
            contentFit="cover"
            source={require("./assets/back.png")}
          />
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.appNameFrame}>
              <View style={[styles.appName2, styles.appSpaceBlock]}>
                <Text style={styles.zamwienie1}>{`Zamówienie
`}</Text>
                <Text style={[styles.ustawieniaKonta, styles.textTypo]}>
                  Koszyk
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.rectangleParent, styles.sliderItemPosition]}>
          <View style={styles.frameChild} />
          <View style={[styles.maskGroupParent, styles.groupParentFlexBox]}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("./assets/mask-group3.png")}
            />
            <Text style={[styles.garyLee1, styles.garyTypo]}>
              Przejdź do Płatności
            </Text>
          </View>
        </View>
        <View style={styles.zestaw}>
          <View style={[styles.duyPopcornParent, styles.duyParentLayout]}>
            <Text style={[styles.duyPopcorn, styles.duyTypo]}>
              Duży popcorn
            </Text>
            <Text style={[styles.z, styles.zTypo]}>18 zł</Text>
            <Image
              style={[
                styles.closeUpDeliciousSaltedPopcIcon,
                styles.parentPosition,
              ]}
              contentFit="cover"
              source={require("./assets/closeupdelicioussaltedpopcornreadybeservedtransformed-1.png")}
            />
          </View>
          <View style={[styles.duyNapjParent, styles.duyParentLayout]}>
            <Text style={[styles.duyNapj, styles.duyTypo]}>Duży napój</Text>
            <Text style={[styles.z1, styles.zTypo]}>18 zł</Text>
            <Image
              style={styles.image28Icon}
              contentFit="cover"
              source={require("./assets/image-28.png")}
            />
            <Text style={[styles.z, styles.zTypo]}>18 zł</Text>
          </View>
        </View>
        <Image
          style={styles.wzrItem}
          contentFit="cover"
          source={require("./assets/line-1.png")}
        />
        <Text style={[styles.z25Z, styles.zTypo]}>
          <Text style={styles.z3}>36 zł</Text>
          <Text style={styles.z4}>25 zł</Text>
        </Text>
        <Text style={[styles.doZapaty, styles.zTypo]}>Do zapłaty:</Text>
        <View style={[styles.iphonestatusbar, styles.groupParentFlexBox]}>
          <Text style={[styles.text1, styles.textFlexBox]}>9.41</Text>
          <View style={[styles.signalParent, styles.groupParentFlexBox]}>
            <Image
              style={styles.signalIcon}
              contentFit="cover"
              source={require("./assets/signal.png")}
            />
            <Image
              style={styles.wiFiIcon}
              contentFit="cover"
              source={require("./assets/wifi.png")}
            />
            <Image
              style={styles.fullBatteryIcon}
              contentFit="cover"
              source={require("./assets/full-battery.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
