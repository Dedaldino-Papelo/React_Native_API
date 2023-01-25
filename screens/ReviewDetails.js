import { View, Text, Button } from "react-native"
import { globalStyle } from "../global/style"

export default function ReviewDetails({navigation, route}){
    
    const {name, email} = route.params;

    return(
        <View style={globalStyle.container}>
            <Text style={{fontFamily: 'Roboto-regular', fontSize: 24}}>
                {name}
            </Text>
            <Text>{email}</Text>
            <Button title="Voltar" onPress={() => navigation.goBack() } />
        </View>
    )
}
