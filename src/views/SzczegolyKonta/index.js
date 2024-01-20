import * as React from "react";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "./styles.js";
import {styles} from "./styles";
import {Text, StyleSheet, View, TouchableOpacity, ScrollView, TouchableWithoutFeedback, TextInput} from "react-native";
import Singleton from "../../Classes/User"
import {useState} from "react";
export function SzczegolyKonta({ navigation }) {
  const [editPersonality, setEditPersonality] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPass, setEditPass] = useState(false);
  return (
    <View style={styles.wzr}>
      <View
        style={[
          styles.iphonestatusbarOgranicznik,
          styles.iphonestatusbarPosition,
        ]}
      >

      </View>

      <View style={styles.frameParent}>
        <View style={[styles.backParent, styles.parentWrapperFlexBox]}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('UstawieniaView')}>
                <Image
                    style={styles.backIcon}
                    contentFit="cover"
                    source={require("./assets/back.png")}
                />
            </TouchableWithoutFeedback>
          <View style={[styles.frameWrapper, styles.parentWrapperFlexBox]}>
            <View style={styles.appNameWrapper}>
              <View style={styles.appName}>
                <Text style={[styles.ustawienia, styles.garyLeeTypo]}>
                  Ustawienia konta
                </Text>
                <Text style={styles.ustawieniaKonta}>Szczegóły Profilu</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.groupWrapper}>
            <View style={styles.groupParent}>
              <View style={styles.frameContainer}>
                <View
                  style={[styles.vectorWrapper, styles.parentWrapperFlexBox]}
                >
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("./assets/ellipse-19.png")}
                  />
                </View>
              </View>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("./assets/ellipse-78.png")}
              />
              <Image
                style={[styles.pencilIcon, styles.groupChildLayout]}
                contentFit="cover"
                source={require("./assets/pencil.png")}
              />
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameItem} />
            <View style={[styles.frameView, styles.frameViewPosition]}>
              <View style={styles.garyLeeParent}>
                <Text style={[styles.garyLee, styles.garyLeeTypo]}>
                  Nazwa uzytkownika
                </Text>
                {editPersonality ? (
                    <TextInput
                        placeholder={Singleton.name}
                        value={Singleton.name}
                        onChangeText={(text) => {

                        }}
                        style={[
                          styles.garyLee1,
                          styles.garyTypo,
                          {
                            borderBottomWidth: 1,
                            borderColor: 'blue',

                          },
                            ]}
                    />
                ) : (
                    <Text style={[styles.garyLee1, styles.garyTypo]}>
                      {Singleton.name}
                    </Text>
                )}
              </View>
              <TouchableOpacity onPress={() =>
              {
                if(editPersonality === true) {
                  setEditPersonality(false);
                }
                else
                  setEditPersonality(true);
              }}>
              <Image
                style={[styles.pencilIcon1, styles.pencilIconLayout]}
                contentFit="cover"
                source={require("./assets/pencil1.png")}
              />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameItem} />
            <View style={[styles.frameView, styles.frameViewPosition]}>
              <View style={styles.garyLeeParent}>
                <Text style={[styles.garyLee, styles.garyLeeTypo]}>Hasło</Text>
                <Text style={[styles.garyLee3, styles.garyTypo]}>
                  **********
                </Text>
              </View>
              <Image
                style={[styles.pencilIcon1, styles.pencilIconLayout]}
                contentFit="cover"
                source={require("./assets/pencil1.png")}
              />
            </View>
          </View>
          <View style={styles.rectangleParent}>
            <View style={styles.frameItem} />
            <View style={[styles.frameView, styles.frameViewPosition]}>
              <View style={styles.garyLeeParent}>
                <Text style={[styles.garyLee, styles.garyLeeTypo]}>Email</Text>
                {editEmail ? (
                    <TextInput
                        placeholder={Singleton.name}
                        value={Singleton.name}  t
                        onChangeText={(text) => {

                        }}
                        style={[
                          styles.garyLee1,
                          styles.garyTypo,
                          {
                            borderBottomWidth: 1, // Example: Add a bottom border
                            borderColor: 'blue', // Example: Border color

                          },
                        ]}
                    />
                ) : (
                    <Text style={[styles.garyLee1, styles.garyTypo]}>
                      {Singleton.name}
                    </Text>
                )}
              </View>
              <TouchableOpacity onPress={() =>
              {
                if(editEmail === true) {
                  setEditEmail(false);
                }
                else
                  setEditEmail(true);
              }}>
                <Image
                    style={[styles.pencilIcon1, styles.pencilIconLayout]}
                    contentFit="cover"
                    source={require("./assets/pencil1.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
