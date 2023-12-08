import * as React from "react";
import {
    FlatList,
    ScrollView,
    View,
    StyleSheet,
    Image,
    Text,
} from "react-native";

export function Test({ navigation,props }) {
    return (
        <View style={styles.view1}>
            <View style={styles.view2}>
                <View style={styles.view3}>
                    <Text>9.41</Text>
                </View>
                <View style={styles.view4}>
                    <Image
                        resizeMode="contain"
                        source={{
                            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/05cc9b12-e833-4cc7-acf7-c2fe5ad06dba?apiKey=dd281a56fc0e4b4680d539632068e445&",
                        }}
                        style={styles.image1}
                    />
                    <Image
                        resizeMode="contain"
                        source={{
                            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/415c767a-72bf-4078-a74a-b4371a7d53ce?apiKey=dd281a56fc0e4b4680d539632068e445&",
                        }}
                        style={styles.image2}
                    />
                    <Image
                        resizeMode="contain"
                        source={{
                            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8bdb4339-343e-4fc9-8081-f6d1de1f218c?apiKey=dd281a56fc0e4b4680d539632068e445&",
                        }}
                        style={styles.image3}
                    />
                </View>
            </View>
            <View style={styles.view5}>
                <Image
                    resizeMode="contain"
                    source={{
                        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/59b33bde-cd22-4e58-8ae9-e7a33224fb7f?apiKey=dd281a56fc0e4b4680d539632068e445&",
                    }}
                    style={styles.image4}
                />
                <View style={styles.view6}>
                    <Text>Szczegóły Profilu</Text>
                </View>
            </View>
            <Image
                resizeMode="contain"
                source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/17f47dcc-4939-4f37-a8bb-32e825bbec36?apiKey=dd281a56fc0e4b4680d539632068e445&",
                }}
                style={styles.image5}
            />
            <View style={styles.view7}>
                <View style={styles.view8}>
                    <View style={styles.view9}>
                        <View style={styles.view10}>
                            <Text>Nazwa urzytkownika</Text>
                        </View>
                        <View style={styles.view11}>
                            <Text>Agnieszka Kowal</Text>
                        </View>
                    </View>
                    <Image
                        resizeMode="contain"
                        source={{
                            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9058f8fa-5342-4364-ba79-dc5c63e345ce?apiKey=dd281a56fc0e4b4680d539632068e445&",
                        }}
                        style={styles.image6}
                    />
                </View>
            </View>
            <View style={styles.view12}>
                <View style={styles.view13}>
                    <View style={styles.view14}>
                        <View style={styles.view15}>
                            <Text>Hasło</Text>
                        </View>
                        <View style={styles.view16}>
                            <Text>**********</Text>
                        </View>
                    </View>
                    <Image
                        resizeMode="contain"
                        source={{
                            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/14c7c8c4-d226-49ce-afdf-6a91a1c95df6?apiKey=dd281a56fc0e4b4680d539632068e445&",
                        }}
                        style={styles.image7}
                    />
                </View>
            </View>
            <View style={styles.view17}>
                <View style={styles.view18}>
                    <View style={styles.view19}>
                        <Text>agnieszkakowal@gmail.com</Text>
                    </View>
                    <Image
                        resizeMode="contain"
                        source={{
                            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0e4e78d-a17d-48d8-99e3-0333f98c39bb?apiKey=dd281a56fc0e4b4680d539632068e445&",
                        }}
                        style={styles.image8}
                    />
                </View>
            </View>
            <View style={styles.view20}>
                <View style={styles.view21}>
                    <Image
                        resizeMode="contain"
                        source={{
                            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/eeb116aa-5154-4e15-bdd4-7b5a1928acf9?apiKey=dd281a56fc0e4b4680d539632068e445&",
                        }}
                        style={styles.image9}
                    />
                    <Image
                        resizeMode="contain"
                        source={{
                            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/73296ffe-14f2-460b-b7b4-43ea57446dd6?apiKey=dd281a56fc0e4b4680d539632068e445&",
                        }}
                        style={styles.image10}
                    />
                    <Image
                        resizeMode="contain"
                        source={{
                            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1fa8b6fd-c366-40b8-b633-e9096a85fed6?apiKey=dd281a56fc0e4b4680d539632068e445&",
                        }}
                        style={styles.image11}
                    />
                    <Image
                        resizeMode="contain"
                        source={{
                            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b97ff446-a2a3-4d83-b4fb-b786d6c0f530?apiKey=dd281a56fc0e4b4680d539632068e445&",
                        }}
                        style={styles.image12}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view1: {
        borderRadius: 40,
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
    },
    view2: {
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.00)",
        alignSelf: "center",
        display: "flex",
        marginTop: 5,
        width: "100%",
        maxWidth: 352,
        justifyContent: "space-between",
        gap: 20,
        padding: "0 20px",
    },
    view3: {
        justifyContent: "center",
        color: "#FFF",
        margin: "auto 0",
        font: "400 19px Berlin Sans FB, sans-serif ",
    },
    view4: {
        alignItems: "stretch",
        alignSelf: "stretch",
        display: "flex",
        gap: 6,
    },
    image1: {
        overflow: "hidden",
        alignSelf: "center",
        position: "relative",
        display: "flex",
        width: 18,
        flexShrink: 0,
        maxWidth: "100%",
        flexDirection: "column",
        margin: "auto 0",
        aspectRatio: "1",
    },
    image2: {
        overflow: "hidden",
        alignSelf: "center",
        position: "relative",
        display: "flex",
        width: 24,
        flexShrink: 0,
        maxWidth: "100%",
        flexDirection: "column",
        margin: "auto 0",
        aspectRatio: "1.09",
    },
    image3: {
        overflow: "hidden",
        position: "relative",
        display: "flex",
        width: 29,
        flexShrink: 0,
        maxWidth: "100%",
        flexDirection: "column",
        aspectRatio: "0.91",
    },
    view5: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        display: "flex",
        marginTop: 24,
        gap: 17,
    },
    image4: {
        overflow: "hidden",
        position: "relative",
        display: "flex",
        width: 27,
        flexShrink: 0,
        maxWidth: "100%",
        flexDirection: "column",
        margin: "auto 0",
        aspectRatio: "0.9",
    },
    view6: {
        color: "#ECECEC",
        justifyContent: "center",
        alignItems: "stretch",
        alignSelf: "stretch",
        flexGrow: "1",
        padding: "9px 20px",
        font: "600 30px/77px Poppins, sans-serif ",
    },
    image5: {
        overflow: "hidden",
        alignSelf: "center",
        position: "relative",
        display: "flex",
        marginTop: 48,
        width: 107,
        maxWidth: "100%",
        flexDirection: "column",
        aspectRatio: "0.95",
    },
    view7: {
        borderRadius: 20,
        backgroundColor: "rgba(196, 196, 196, 0.10)",
        alignSelf: "center",
        display: "flex",
        marginTop: 29,
        width: "100%",
        maxWidth: 370,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        padding: "21px 39px 21px 31px",
    },
    view8: {
        alignItems: "stretch",
        display: "flex",
        justifyContent: "space-between",
        gap: 20,
    },
    view9: {
        justifyContent: "center",
        alignItems: "stretch",
        display: "flex",
        flexGrow: "1",
        flexBasis: "0%",
        flexDirection: "column",
    },
    view10: {
        color: "#CBCBCB",
        fontFeatureSettings: "'clig' off, 'liga' off",
        font: "500 12px/18px Poppins, sans-serif ",
    },
    view11: {
        color: "#FFF",
        fontFeatureSettings: "'clig' off, 'liga' off",
        font: "600 19px/29px Poppins, sans-serif ",
    },
    image6: {
        overflow: "hidden",
        alignSelf: "center",
        position: "relative",
        display: "flex",
        width: 35,
        flexShrink: 0,
        maxWidth: "100%",
        flexDirection: "column",
        margin: "auto 0",
        aspectRatio: "1",
    },
    view12: {
        borderRadius: 20,
        backgroundColor: "rgba(196, 196, 196, 0.10)",
        alignSelf: "center",
        display: "flex",
        marginTop: 13,
        width: "100%",
        maxWidth: 370,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        padding: "21px 39px 21px 31px",
    },
    view13: {
        alignItems: "stretch",
        display: "flex",
        justifyContent: "space-between",
        gap: 20,
    },
    view14: {
        justifyContent: "center",
        alignItems: "stretch",
        display: "flex",
        flexGrow: "1",
        flexBasis: "0%",
        flexDirection: "column",
    },
    view15: {
        color: "#CBCBCB",
        fontFeatureSettings: "'clig' off, 'liga' off",
        font: "500 12px/18px Poppins, sans-serif ",
    },
    view16: {
        color: "#FFF",
        fontFeatureSettings: "'clig' off, 'liga' off",
        font: "600 22px/33px Poppins, sans-serif ",
    },
    image7: {
        overflow: "hidden",
        alignSelf: "center",
        position: "relative",
        display: "flex",
        width: 35,
        flexShrink: 0,
        maxWidth: "100%",
        flexDirection: "column",
        margin: "auto 0",
        aspectRatio: "1",
    },
    view17: {
        borderRadius: 20,
        backgroundColor: "rgba(196, 196, 196, 0.10)",
        alignSelf: "center",
        display: "flex",
        marginTop: 13,
        width: "100%",
        maxWidth: 370,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        padding: "21px 37px 21px 31px",
    },
    view18: {
        alignItems: "stretch",
        display: "flex",
        justifyContent: "space-between",
        gap: 20,
    },
    view19: {
        color: "#FFF",
        fontFeatureSettings: "'clig' off, 'liga' off",
        justifyContent: "center",
        alignItems: "stretch",
        flexGrow: "1",
        paddingTop: 21,
        font: "600 15px/23px Poppins, sans-serif ",
    },
    image8: {
        overflow: "hidden",
        alignSelf: "center",
        position: "relative",
        display: "flex",
        width: 35,
        flexShrink: 0,
        maxWidth: "100%",
        flexDirection: "column",
        margin: "auto 0",
        aspectRatio: "1",
    },
    view20: {
        justifyContent: "flex-end",
        alignItems: "stretch",
        borderRadius: "0px 0px 30px 30px",
        backdropFilter: "blur(2px)",
        backgroundColor: "#141414",
        alignSelf: "stretch",
        display: "flex",
        marginTop: 156,
        width: "100%",
        flexDirection: "column",
        padding: "18px 15px 47px 31px",
    },
    view21: {
        justifyContent: "space-between",
        alignItems: "stretch",
        display: "flex",
        gap: 20,
        padding: "12px 27px",
    },
    image9: {
        overflow: "hidden",
        position: "relative",
        display: "flex",
        width: 35,
        flexShrink: 0,
        maxWidth: "100%",
        flexDirection: "column",
        aspectRatio: "1",
    },
    image10: {
        overflow: "hidden",
        position: "relative",
        display: "flex",
        width: 35,
        flexShrink: 0,
        maxWidth: "100%",
        flexDirection: "column",
        aspectRatio: "1",
    },
    image11: {
        overflow: "hidden",
        position: "relative",
        display: "flex",
        width: 35,
        flexShrink: 0,
        maxWidth: "100%",
        flexDirection: "column",
        aspectRatio: "1",
    },
    image12: {
        overflow: "hidden",
        position: "relative",
        display: "flex",
        width: 35,
        flexShrink: 0,
        maxWidth: "100%",
        flexDirection: "column",
        aspectRatio: "1",
    },
});
