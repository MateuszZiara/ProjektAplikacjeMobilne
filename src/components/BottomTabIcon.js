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
                return<Image
                    style={[styles.rectFocus, styles.imgActive]}
                    source={require('../images/Calendar(active).png')}
                />

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
                            source={require('../images/CartEmpty(active).png')}
                        />
                    </View>
                }
            }
            else
            {
                if(Cart.array.length !== 0) {
                    console.log('Cart.array.length');
                    return <Image
                            style={styles.img}
                            source={require('../images/CartContains(inactive).png')}
                        />

                }
                else {
                    return<Image
                            style={styles.imgActive}
                            source={require('../images/CartEmpty(inactive).png')}
                        />

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
        backgroundColor: '#0f0f0f',
        width: 40,
        height: 40,
        //borderRadius: 2 //już bez tej obwódki bo szkoda czasu na to gówno
    },
})