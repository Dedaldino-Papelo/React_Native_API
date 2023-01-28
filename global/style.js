import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    input: {
        borderWidth: 2,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        marginBottom: 10
    },
    errorText: {
        color: '#ff1111',
        textTransform: 'uppercase'
    }
})