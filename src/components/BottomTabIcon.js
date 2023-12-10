import {StyleSheet, Image, View} from "react-native";
import {PrzekaskiView} from "../views/Przekaski";
import Cart from "../Classes/Cart";

export const BottomTabIcon = ({ routeName, focused }) => {
    switch (routeName)
    {
        case 'Home':
            if(focused)
            {
                return <Image
                    style={styles.imgActive}
                    source={require('../images/Home(active).png')}

                />
            }
            else
            {
                return <Image
                    style={styles.img}
                    source={require('../images/Home(inactive).png')}
                />
            }
        case 'PrzekaskiView':
            if(focused)
            {
                return <Image
                    style={styles.imgActive}
                    source={require('../images/Popcorn(active).png')}
                />
            }
            else
            {
                return <Image
                    style={styles.img}
                    source={require('../images/Popcorn(inactive).png')}
                />
            }
        case 'Bilety1':
            if(focused)
            {
                return <Image
                    style={styles.imgActive}
                    source={require('../images/Ticket(Active).png')}
                />
            }
            else
            {
                return <Image
                    style={styles.img}
                    source={require('../images/Ticket(inactive).png')}
                />
            }
        case 'RepertuarView':
            if(focused)
            {
                return <View style={styles.rectFocus}>
                <Image
                    style={styles.imgActive}
                    source={require('../images/Calendar(active).png')}
                />
                </View>
            }
            else
            {
                return <Image
                    style={styles.img}
                    source={require('../images/Calendar(inactive).png')}
                />
            }
        case 'Koszyk':
            if(focused)
            {

                if(Cart.array.length !== 0) {
                    console.log('Cart.array.length');
                    return <View style={styles.rectFocus}>
                        <Image
                            style={styles.imgActive}
                            source={require('../images/CartConatins(active).png')}
                        />
                    </View>
                }
                else {
                    return <View style={styles.rectFocus}>
                        <Image
                            style={styles.imgActive}
                            source={require('../CartEmpty(active)/Koszyk.png')}
                        />
                    </View>
                }
            }
            else
            {
                if(Cart.array.length !== 0) {
                    console.log('Cart.array.length');
                    return <View style={styles.rectFocus}>
                        <Image
                            style={styles.imgActive}
                            source={require('../images/CartContains(inactive).png')}
                        />
                    </View>
                }
                else {
                    return <View style={styles.rectFocus}>
                        <Image
                            style={styles.imgActive}
                            source={require('../CartEmpty(inactive)/Koszyk.png')}
                        />
                    </View>
                }
            }
    }
}

const styles = StyleSheet.create({
    img:{
        backgroundColor: 'black',
        width: 28,
        height: 28
    },
    imgActive: {
        backgroundColor: 'black',
        width: 40,
        height: 40
    },
    rectFocus: {
        borderRadius: '13px',
        background: 'rgba(255, 255, 255, 0.20)', //TODO nie wyswietla się!!!

    }
})