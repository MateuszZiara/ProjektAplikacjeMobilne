import * as React from "react";
import { Text, StyleSheet, View, ScrollView} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles";

export function Bilety4_vip({ navigation }) {
  return (
      <ScrollView style={{ flex: 1 }}>
    <View style={styles.wzr}>
      <View style={[styles.repertuar, styles.repertuarPosition]}>
        <View style={[styles.singleBar, styles.singleLayout]}>
          <View style={[styles.tytulParent, styles.parentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>18:30</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>21:30</Text>
            <View style={styles.rightFlexBox}>
              <Image
                style={styles.rightArrowIcon}
                contentFit="cover"
                source={require("./assets/right-arrow.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleParent, styles.sliderPosition]}>
            <View style={[styles.frameChild, styles.sliderPosition]} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>
                Batman Początki
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.singleBar1, styles.singleLayout]}>
          <View style={[styles.tytulParent, styles.parentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:00</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>22:00</Text>
            <View style={styles.frameWrapperLayout}>
              <View style={[styles.rightArrowContainer, styles.sliderPosition]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.rectangleParent, styles.sliderPosition]}>
            <View style={[styles.frameChild, styles.sliderPosition]} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul5, styles.tytulTypo]}>
                Pięć Koszmarnych Nocy
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.singleBar1, styles.singleLayout]}>
          <View style={[styles.frameView, styles.frameViewPosition]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>18:45</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:45</Text>
          </View>
          <View style={[styles.rectangleParent, styles.sliderPosition]}>
            <View style={[styles.frameChild, styles.sliderPosition]} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>
                American Psycho
              </Text>
            </View>
          </View>
          <View style={[styles.singleBarInner, styles.frameWrapperLayout]}>
            <View style={[styles.rightArrowContainer, styles.sliderPosition]}>
              <Image
                style={styles.rightArrowIcon}
                contentFit="cover"
                source={require("./assets/right-arrow1.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.singleBar1, styles.singleLayout]}>
          <View style={[styles.tytulParent, styles.parentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:00</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:30</Text>
            <View style={styles.frameWrapperLayout}>
              <View style={[styles.rightArrowContainer, styles.sliderPosition]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.rectangleParent, styles.sliderPosition]}>
            <View style={[styles.frameChild, styles.sliderPosition]} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Toy Story</Text>
            </View>
          </View>
        </View>
        <View style={[styles.singleBar1, styles.singleLayout]}>
          <View style={[styles.tytulParent, styles.parentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:30</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>22:30</Text>
            <View style={styles.frameWrapperLayout}>
              <View style={[styles.rightArrowContainer, styles.sliderPosition]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.rectangleParent, styles.sliderPosition]}>
            <View style={[styles.frameChild, styles.sliderPosition]} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Napoleon</Text>
            </View>
          </View>
        </View>
        <View style={[styles.singleBar1, styles.singleLayout]}>
          <View style={[styles.tytulParent, styles.parentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:15</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:15</Text>
            <View style={styles.frameWrapperLayout}>
              <View style={[styles.rightArrowContainer, styles.sliderPosition]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.rectangleParent, styles.sliderPosition]}>
            <View style={[styles.frameChild, styles.sliderPosition]} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Auta</Text>
            </View>
          </View>
        </View>
        <View style={[styles.singleBar1, styles.singleLayout]}>
          <View style={[styles.tytulParent, styles.parentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:15</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:15</Text>
            <View style={styles.frameWrapperLayout}>
              <View style={[styles.rightArrowContainer, styles.sliderPosition]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.rectangleParent, styles.sliderPosition]}>
            <View style={[styles.frameChild, styles.sliderPosition]} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Auta 2</Text>
            </View>
          </View>
        </View>
        <View style={[styles.singleBar1, styles.singleLayout]}>
          <View style={[styles.tytulParent, styles.parentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:15</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:15</Text>
            <View style={styles.frameWrapperLayout}>
              <View style={[styles.rightArrowContainer, styles.sliderPosition]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.rectangleParent, styles.sliderPosition]}>
            <View style={[styles.frameChild, styles.sliderPosition]} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Auta 3</Text>
            </View>
          </View>
        </View>
        <View style={[styles.singleBar1, styles.singleLayout]}>
          <View style={[styles.tytulParent, styles.parentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:15</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:15</Text>
            <View style={styles.frameWrapperLayout}>
              <View style={[styles.rightArrowContainer, styles.sliderPosition]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.rectangleParent, styles.sliderPosition]}>
            <View style={[styles.frameChild, styles.sliderPosition]} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Toy Story</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.wzrChild} />
      <View style={[styles.repertuarPosition]}>
        <View style={[styles.homeinactiveParent, styles.parentFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("./assets/homeinactive.png")}
          />
          <Image
            style={[styles.popcorninactiveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("./assets/popcorninactive.png")}
          />
          <Image
            style={[styles.popcorninactiveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("./assets/mask-group.png")}
          />
          <Image
            style={[styles.popcorninactiveIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("./assets/mask-group1.png")}
          />
        </View>
      </View>
      <View style={[styles.headerEkranuPrzeksek, styles.sliderLayout]}>
        <View style={[styles.slider, styles.sliderLayout]}>
          <Image
            style={[styles.image2Icon, styles.image2IconLayout]}
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
          <View style={styles.sliderItem} />
          <LinearGradient
            style={[styles.sliderInner, styles.sliderBg]}
            locations={[0.53, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
          />
        </View>
      </View>
      <View style={[styles.backParent, styles.parentFlexBox]}>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("./assets/back.png")}
        />
        <View style={[styles.frameWrapper5, styles.frameWrapperFlexBox]}>
          <View style={styles.appNameWrapper}>
            <View style={[styles.appName, styles.appSpaceBlock]}>
              <Text style={[styles.ustawienia, styles.biletyLayout]}>
                Bilety
              </Text>
              <Text style={styles.ustawieniaKonta}>Rezerwacja</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.frameWrapper6, styles.frameWrapperFlexBox]}>
          <View style={styles.appNameContainer}>
            <View style={[styles.appName1, styles.appSpaceBlock]}>
              <Text style={[styles.dlaCiebieI, styles.biletyLayout]}>
                Dla ciebie i dla rodziny
              </Text>
              <Text style={[styles.bilety, styles.biletyLayout]}>Bilety</Text>
            </View>
          </View>
        </View>
        <View style={[styles.vectorWrapper, styles.parentFlexBox]}>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("./assets/ellipse-19.png")}
          />
        </View>
      </View>
    </View>
      </ScrollView>
  );
}

