import { View, Text, Button, StyleSheet } from "react-native"
import Card from "../components/Card";
import { globalStyle } from "../global/style"

export default function ReviewDetails({navigation, route}){
    
    const {name, email} = route.params;

    return(
        <View style={globalStyle.container}>
            <Card>
                <Text style={{fontFamily: 'Roboto-regular', fontSize: 24}}>
                    {name}
                </Text>
                <Text style={styles.email}>{email}</Text>
            </Card>
            <Button title="Voltar" onPress={() => navigation.goBack() } />
        </View>
    )
}

const styles = StyleSheet.create({
    email: {
        marginVertical: 10
    }
})
