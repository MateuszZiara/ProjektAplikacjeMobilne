import * as React from "react";
import {Text, StyleSheet, View, ScrollView, ScrollViewBase, TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Padding, Border } from "./styles.js";
import {styles} from "./styles.js"
import Singleton from "../../Classes/User";
import {Login} from "../Login";
import {UstawieniaView} from "../Ustawienia";
export function RepertuarView({ navigation }) {
  return (
      <ScrollView>
    <View style={styles.repertuar}>
      <ScrollView style={[styles.repertuar1, styles.repertuarPosition]}>
        <View style={styles.singleBar}>
          <View style={[styles.tytulParent, styles.frameParentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>18:30</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>21:30</Text>
            <View
              style={[styles.rightArrowWrapper, styles.rightWrapperFlexBox]}
            >
              <Image
                style={styles.rightArrowIcon}
                contentFit="cover"
                source={require("./assets/right-arrow.png")}
              />
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>
                Batman Początki
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.singleBar1}>
          <View style={[styles.tytulParent, styles.frameParentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:00</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>22:00</Text>
            <View style={styles.wrapperLayout}>
              <View
                style={[styles.rightArrowContainer, styles.rightWrapperFlexBox]}
              >
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul5, styles.tytulTypo]}>
                Pięć Koszmarnych Nocy
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.singleBar2}>
          <View style={[styles.frameView, styles.frameViewPosition]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>18:45</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:45</Text>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>
                American Psycho
              </Text>
            </View>
          </View>
          <View style={[styles.singleBarInner, styles.wrapperLayout]}>
            <View
              style={[styles.rightArrowContainer, styles.rightWrapperFlexBox]}
            >
              <Image
                style={styles.rightArrowIcon}
                contentFit="cover"
                source={require("./assets/right-arrow1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.singleBar3}>
          <View style={[styles.tytulParent, styles.frameParentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:00</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:30</Text>
            <View style={styles.wrapperLayout}>
              <View
                style={[styles.rightArrowContainer, styles.rightWrapperFlexBox]}
              >
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Toy Story</Text>
            </View>
          </View>
        </View>
        <View style={styles.singleBar4}>
          <View style={[styles.tytulParent, styles.frameParentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:30</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>22:30</Text>
            <View style={styles.wrapperLayout}>
              <View
                style={[styles.rightArrowContainer, styles.rightWrapperFlexBox]}
              >
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Napoleon</Text>
            </View>
          </View>
        </View>
        <View style={styles.singleBar5}>
          <View style={[styles.tytulParent, styles.frameParentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:15</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:15</Text>
            <View style={styles.wrapperLayout}>
              <View
                style={[styles.rightArrowContainer, styles.rightWrapperFlexBox]}
              >
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Auta</Text>
            </View>
          </View>
        </View>
        <View style={styles.singleBar6}>
          <View style={[styles.tytulParent, styles.frameParentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:15</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:15</Text>
            <View style={styles.wrapperLayout}>
              <View style={[styles.rightArrowContainer, styles.rightWrapperFlexBox]}>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Auta 2</Text>
            </View>
          </View>
        </View>
        <View style={styles.singleBar7}>
          <View style={[styles.tytulParent, styles.frameParentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:15</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:15</Text>
            <View style={styles.wrapperLayout}>
              <View
                style={[styles.rightArrowContainer, styles.rightWrapperFlexBox]}
              >
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Auta 3</Text>
            </View>
          </View>
        </View>
        <View style={styles.singleBar8}>
          <View style={[styles.tytulParent, styles.frameParentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:15</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:15</Text>
            <View style={styles.wrapperLayout}>
              <View
                style={[styles.rightArrowContainer, styles.rightWrapperFlexBox]}
              >
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Auta 4</Text>
            </View>
          </View>
        </View>
        <View style={styles.singleBar9}>
          <View style={[styles.tytulParent, styles.frameParentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:15</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:15</Text>
            <View style={styles.wrapperLayout}>
              <View
                style={[styles.rightArrowContainer, styles.rightWrapperFlexBox]}
              >
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul2, styles.tytulTypo]}>Chłopi</Text>
            </View>
          </View>
        </View>
        <View style={styles.singleBar10}>
          <View style={[styles.tytulParent, styles.frameParentFlexBox]}>
            <Text style={[styles.tytul, styles.tytulTypo1]}>19:15</Text>
            <Text style={[styles.tytul1, styles.tytulTypo1]}>20:15</Text>
            <View style={styles.wrapperLayout}>
              <View
                style={[styles.rightArrowContainer, styles.rightWrapperFlexBox]}
              >
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("./assets/right-arrow.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.tytulWrapper, styles.frameViewPosition]}>
              <Text style={[styles.tytul32, styles.tytulTypo]}>
                Five Nights at Freddy’s
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.wydarzeniaSpecjalneParent}>
          <Text style={[styles.wydarzeniaSpecjalne, styles.repertuar3Typo]}>
            Wydarzenia specjalne
          </Text>
          <Text style={[styles.poznajNaszeCykle, styles.jedyneWSwoimTypo]}>
            Poznaj nasze cykle kinowe.
          </Text>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.parentLayout}>
            <Image
              style={styles.johnMartinBelshazzarsFeaIcon}
              contentFit="cover"
              source={require("./assets/john-martin--belshazzars-feast--google-art-project-1.png")}
            />
            <LinearGradient
              style={[
                styles.rectangleLineargradient,
                styles.komponentPrzekskiChildBg,
              ]}
              locations={[0, 1]}
              colors={["rgba(0, 0, 0, 0)", "#000"]}
            />
            <Text style={[styles.kulturalneRody, styles.lodyOreoTypo]}>
              Kulturalne środy
            </Text>
          </View>
          <View style={[styles.image30Parent, styles.parentLayout]}>
            <Image
              style={styles.image30Icon}
              contentFit="cover"
              source={require("./assets/image-30.png")}
            />
            <LinearGradient
              style={[
                styles.rectangleLineargradient,
                styles.komponentPrzekskiChildBg,
              ]}
              locations={[0, 1]}
              colors={["rgba(0, 0, 0, 0)", "#000"]}
            />
            <Text style={[styles.kobieceWtorki, styles.lodyOreoTypo]}>
              Kobiece wtorki
            </Text>
          </View>
          <View style={[styles.image30Parent, styles.parentLayout]}>
            <Image
              style={styles.xavierMoutonPhotographieRyIcon}
              contentFit="cover"
              source={require("./assets/xaviermoutonphotographiery-sd0p1zl0unsplash-1.png")}
            />
            <LinearGradient
              style={[
                styles.rectangleLineargradient,
                styles.komponentPrzekskiChildBg,
              ]}
              locations={[0, 1]}
              colors={["rgba(0, 0, 0, 0)", "#000"]}
            />
            <Text style={[styles.lodyOreo, styles.lodyOreoTypo]}>
              Rodzinne soboty
            </Text>
          </View>
        </View>
        <View style={styles.sliderNav}>
          <View style={[styles.view, styles.viewLayout]} />
          <View style={[styles.view1, styles.viewLayout]} />
          <View style={[styles.view2, styles.viewLayout]} />
          <View style={[styles.view3, styles.viewLayout]} />
          <View style={styles.curr} />
        </View>
        <View style={[styles.komponentPrzekski, styles.komponentLayout]}>
          <Image
            style={styles.glowingSpaceshipOrbitsPlaneIcon}
            contentFit="cover"
            source={require("./assets/glowingspaceshiporbitsplanetstarrygalaxygeneratedbyai-1.png")}
          />
          <LinearGradient
            style={[styles.komponentPrzekskiChild, styles.komponentLayout]}
            locations={[0, 0.69]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
          />
          <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
            <View>
              <Text style={[styles.jedyneWSwoim, styles.jedyneWSwoimTypo]}>
                Jedyne w swoim rodzaju
              </Text>
              <Text style={styles.przekski}>Przekąski</Text>
            </View>
            <View
              style={[styles.rightArrowWrapper9, styles.rightWrapperFlexBox]}
            >
              <Image
                style={styles.rightArrowIcon11}
                contentFit="cover"
                source={require("./assets/right-arrow2.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <LinearGradient
        style={[styles.repertuarChild, styles.sliderInnerPosition]}
        locations={[0, 1]}
        colors={["#000", "rgba(0, 0, 0, 0.34)"]}
      />
      <Text style={[styles.najbliszeSeanse, styles.najbliszeSeanseClr]}>
        Najbliższe seanse
      </Text>
      <View style={[styles.repertuarParent, styles.repertuarPosition]}>
        <Text style={[styles.wydarzeniaSpecjalne, styles.repertuar3Typo]}>
          Repertuar
        </Text>
        <Text style={[styles.poznajNaszeCykle, styles.jedyneWSwoimTypo]}>
          Sprawdź nasze nowości.
        </Text>
      </View>


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
            style={[styles.sliderInner, styles.sliderInnerPosition]}
            locations={[0.53, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
          />
        </View>


        <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
          <View style={[styles.frameWrapper7, styles.frameParentFlexBox]}>
            <View style={styles.appNameWrapper}>
              <View style={styles.appName}>
                <Text style={[styles.znajdTwjFilm, styles.repertuar3Layout]}>
                  Znajdź twój film
                </Text>
                <Text style={[styles.repertuar3, styles.repertuar3Layout]}>
                  Repertuar
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.vectorWrapper} onPress={() => { //TODO Zrobić z tego moduł!!!
            Singleton.name === null ? navigation.navigate(Login) : navigation.navigate(UstawieniaView);
          }}>
            <Image
                style={styles.ellipseIcon}
                contentFit="cover"
                source={require("./assets/ellipse-19.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
      </ScrollView>
  );
}

