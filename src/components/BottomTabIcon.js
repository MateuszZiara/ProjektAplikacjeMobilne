import {StyleSheet, Image} from "react-native";

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
    }
})