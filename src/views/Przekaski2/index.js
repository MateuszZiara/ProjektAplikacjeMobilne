import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles"

export function Przekaski2View({ navigation }) {
  return (
    <View style={styles.wzr}>
      <View style={styles.headerEkranuPrzeksekParent}>
        <View style={styles.headerEkranuPrzeksek}>
          <View style={styles.headerEkranuPrzeksek}>
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
              style={[styles.sliderInner, styles.sliderInnerPosition]}
              locations={[0.53, 1]}
              colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
            />
          </View>
          <View style={[styles.frameParent, styles.parentFlexBox]}>
            <View style={[styles.frameWrapper, styles.frameFlexBox]}>
              <View style={styles.appNameWrapper}>
                <View style={[styles.appName, styles.appSpaceBlock]}>
                  <Text style={[styles.idealneNaSeans, styles.ustawieniaTypo]}>
                    Idealne na seans
                  </Text>
                  <Text style={[styles.przekski, styles.przekskiTypo]}>
                    Przekąski
                  </Text>
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
        <View style={[styles.backParent, styles.parentFlexBox]}>
          <Image
            style={styles.backIcon}
            contentFit="cover"
            source={require("./assets/back.png")}
          />
          <View style={[styles.frameContainer, styles.frameFlexBox]}>
            <View style={styles.appNameContainer}>
              <View style={[styles.appName1, styles.appSpaceBlock]}>
                <Text
                  style={[styles.ustawienia, styles.ustawieniaTypo]}
                >{`Przekąski
`}</Text>
                <Text style={[styles.ustawieniaKonta, styles.przekskiTypo]}>
                  Bestsellery
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.sliderPrzekasekParent}>
          <View style={[styles.sliderPrzekasek, styles.sliderPosition]}>
            <View style={styles.parentLayout}>
              <Image
                style={[styles.image28Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("./assets/image-28.png")}
              />
              <Text style={[styles.cocaCola05l, styles.lodyTypo]}>
                Coca cola 0,5L
              </Text>
            </View>
            <View style={[styles.lodyOreoParent, styles.parentLayout]}>
              <Text style={[styles.lodyOreo, styles.lodyTypo]}>Lody Oreo</Text>
              <Image
                style={[styles.image10Icon, styles.image10IconPosition]}
                contentFit="cover"
                source={require("./assets/image-10.png")}
              />
            </View>
            <View style={[styles.lodyOreoParent, styles.parentLayout]}>
              <Text style={[styles.lodyOreo, styles.lodyTypo]}>Słodycze</Text>
              <Image
                style={[styles.pngitem3884021Icon, styles.lodyOreo2Position]}
                contentFit="cover"
                source={require("./assets/pngitem-388402-1.png")}
              />
            </View>
            <View style={[styles.lodyOreoParent, styles.parentLayout]}>
              <Text style={[styles.maaKawa, styles.nachosTypo]}>Mała kawa</Text>
              <Image
                style={styles.pngitem38362491Icon}
                contentFit="cover"
                source={require("./assets/pngitem-3836249-1.png")}
              />
            </View>
          </View>
          <View style={[styles.sliderPrzekasek1, styles.sliderPosition]}>
            <View style={styles.parentLayout}>
              <Text style={[styles.cocaCola05l, styles.lodyTypo]}>
                Mały popcorn
              </Text>
              <Image
                style={[styles.pngitem48680921Icon, styles.iconPosition]}
                contentFit="cover"
                source={require("./assets/pngitem-4868092-1.png")}
              />
            </View>
            <View style={[styles.lodyOreoParent, styles.parentLayout]}>
              <Text style={[styles.nachos, styles.nachosTypo]}>Nachos</Text>
              <Image
                style={[styles.pngitem11008611Icon, styles.sliderInnerPosition]}
                contentFit="cover"
                source={require("./assets/pngitem-1100861-1.png")}
              />
            </View>
            <View style={[styles.lodyOreoParent, styles.parentLayout]}>
              <Text style={[styles.lodyOreo2, styles.textFlexBox]}>
                Carmel Latte Machiatto
              </Text>
              <Image
                style={styles.image29Icon}
                contentFit="cover"
                source={require("./assets/image-29.png")}
              />
            </View>
            <View style={[styles.lodyOreoParent, styles.parentLayout]}>
              <Text style={[styles.lemoniada, styles.lodyTypo]}>Lemoniada</Text>
              <Image
                style={styles.pngitem10184351Icon}
                contentFit="cover"
                source={require("./assets/pngitem-1018435-1.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.navigationBar, styles.navigationBarLayout]}>
          <View style={[styles.homeinactiveParent, styles.image10IconPosition]}>
            <View style={styles.homeinactiveLayout}>
              <Pressable style={styles.ikonaDolnegoNavbaruNieakty} />
            </View>
            <Image
              style={[styles.popcornactiveIcon, styles.homeinactiveLayout]}
              contentFit="cover"
              source={require("./assets/popcornactive.png")}
            />
            <Image
              style={[styles.popcornactiveIcon, styles.homeinactiveLayout]}
              contentFit="cover"
              source={require("./assets/mask-group.png")}
            />
            <Image
              style={[styles.popcornactiveIcon, styles.homeinactiveLayout]}
              contentFit="cover"
              source={require("./assets/mask-group1.png")}
            />
          </View>
          <View style={[styles.iphoneIndicator, styles.navigationBarLayout]}>
            <View style={styles.line} />
          </View>
          <Pressable style={styles.navigationBarChild} />
        </View>
      </View>
      <View
        style={[
          styles.iphonestatusbarOgranicznik,
          styles.iphonestatusbarPosition,
        ]}
      >
        <View style={[styles.iphonestatusbar, styles.iphonestatusbarPosition]}>
          <Text style={[styles.text, styles.textFlexBox]}>9.41</Text>
          <View style={[styles.signalParent, styles.parentFlexBox]}>
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
}
