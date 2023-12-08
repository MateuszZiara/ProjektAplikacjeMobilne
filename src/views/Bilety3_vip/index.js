import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {styles} from "./styles"
export function Bilety3_vip({ navigation }) {
  return (
      <ScrollView style={{ flex: 1 }}>
    <View style={styles.wybprDaty}>

      <View style={[styles.headerEkranuPrzeksek, styles.sliderLayout]}>
        <View style={[styles.slider, styles.sliderPosition]}>
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
          <View style={[styles.sliderItem, styles.sliderPosition]} />
          <LinearGradient
            style={styles.sliderInner}
            locations={[0.53, 1]}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"]}
          />
        </View>
      </View>
      <View style={[styles.backParent, styles.wrapperParentFlexBox]}>
        <Image
          style={styles.backIconLayout1}
          contentFit="cover"
          source={require("./assets/back.png")}
        />
        <View style={[styles.frameWrapper, styles.frameFlexBox]}>
          <View style={styles.appNameWrapper}>
            <View style={[styles.appName, styles.appSpaceBlock]}>
              <Text style={[styles.ustawienia, styles.ustawieniaTypo]}>
                Bilety
              </Text>
              <Text style={[styles.ustawieniaKonta, styles.biletyTypo]}>
                Rezerwacja
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent, styles.wrapperParentFlexBox]}>
        <View style={[styles.frameContainer, styles.frameFlexBox]}>
          <View style={styles.appNameContainer}>
            <View style={[styles.appName1, styles.appSpaceBlock]}>
              <Text style={[styles.dlaCiebieI, styles.ustawieniaTypo]}>
                Dla ciebie i dla rodziny
              </Text>
              <Text style={[styles.bilety, styles.biletyTypo]}>Bilety</Text>
            </View>
          </View>
        </View>
        <View style={[styles.vectorWrapper, styles.wrapperParentFlexBox]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("./assets/ellipse-19.png")}
          />
        </View>
      </View>
      <View style={[styles.listopadParent, styles.groupChildShadowBox]}>
        <Text style={[styles.listopad, styles.textTypo1]}>Listopad</Text>
        <Text style={[styles.text, styles.textTypo1]}>2023</Text>
        <Image
          style={[styles.backIcon1, styles.backIconLayout]}
          contentFit="cover"
          source={require("./assets/back1.png")}
        />
        <Image
          style={[styles.backIcon2, styles.backIconLayout]}
          contentFit="cover"
          source={require("./assets/back2.png")}
        />
        <View style={[styles.instanceParent, styles.instanceParentPosition]}>
          <View style={[styles.suWrapper, styles.wrapperParentFlexBox]}>
            <Text style={[styles.su, styles.textTypo]}>Pn</Text>
          </View>
          <View style={[styles.suWrapper, styles.wrapperParentFlexBox]}>
            <Text style={[styles.su, styles.textTypo]}>Wt</Text>
          </View>
          <View style={[styles.suWrapper, styles.wrapperParentFlexBox]}>
            <Text style={[styles.su, styles.textTypo]}>Śr</Text>
          </View>
          <View style={[styles.suWrapper, styles.wrapperParentFlexBox]}>
            <Text style={[styles.su, styles.textTypo]}>Czw</Text>
          </View>
          <View style={[styles.suWrapper, styles.wrapperParentFlexBox]}>
            <Text style={[styles.su, styles.textTypo]}>Pt</Text>
          </View>
          <View style={[styles.suWrapper, styles.wrapperParentFlexBox]}>
            <Text style={[styles.su, styles.textTypo]}>So</Text>
          </View>
          <View style={[styles.suWrapper, styles.wrapperParentFlexBox]}>
            <Text style={[styles.su, styles.textTypo]}>N</Text>
          </View>
        </View>
        <View style={[styles.instanceGroup, styles.instanceParentPosition]}>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>26</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>27</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>28</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>29</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>30</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>31</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>1</Text>
            </View>
          </View>
        </View>
        <View style={[styles.instanceContainer, styles.instanceParentPosition]}>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>2</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>3</Text>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <LinearGradient
              style={[styles.groupChild, styles.groupChildShadowBox]}
              locations={[0, 0.83, 1]}
              colors={[
                "rgba(131, 6, 255, 0.6)",
                "rgba(102, 33, 250, 0.18)",
                "rgba(109, 44, 249, 0)",
              ]}
            />
            <View style={[styles.frameWrapper10, styles.frameWrapperFlexBox]}>
              <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
                <Text style={[styles.text7, styles.textTypo]}>4</Text>
              </View>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>5</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>6</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>7</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>8</Text>
            </View>
          </View>
        </View>
        <View style={[styles.instanceParent1, styles.instanceParentPosition]}>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>9</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>10</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>12</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>13</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>14</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>15</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>16</Text>
            </View>
          </View>
        </View>
        <View style={[styles.instanceParent2, styles.instanceParentPosition]}>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>17</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>18</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>19</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>20</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>21</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>22</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>23</Text>
            </View>
          </View>
        </View>
        <View style={[styles.instanceParent3, styles.instanceParentPosition]}>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>24</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>25</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>26</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>27</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>28</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>29</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>30</Text>
            </View>
          </View>
        </View>
        <View style={[styles.instanceParent4, styles.instanceParentPosition]}>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text7, styles.textTypo]}>31</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>1</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>2</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>3</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>4</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>5</Text>
            </View>
          </View>
          <View style={styles.frameWrapperFlexBox}>
            <View style={[styles.wrapper, styles.wrapperParentFlexBox]}>
              <Text style={[styles.text1, styles.textTypo]}>6</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
      </ScrollView>
  );
}
