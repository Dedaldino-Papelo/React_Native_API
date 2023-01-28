import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomButton({ text, onPress }){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.Button}>
                <Text style={styles.TextButton}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#09afeb'
    },
    TextButton: {
        color: '#fff',
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center"
    }
})