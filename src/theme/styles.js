
import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({

    margin: {
        marginHorizontal: 20
    },
    title: { 
        fontSize: 30,
        marginBottom: 10
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
});