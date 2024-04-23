import { StyleSheet } from 'react-native';

const buttons = StyleSheet.create({
    containerbutton: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 20
    },
    blackButton: {
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30
    },
    logoutButton: {
        backgroundColor: 'lightblue',
        borderWidth: 0.5,
        borderRadius: 10,
        color: "black",
        padding: 3
    }
})

export default buttons;