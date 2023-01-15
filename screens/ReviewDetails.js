import { View, Text, StyleSheet } from "react-native"
import { globalStyle } from "../global/style"

export default function ReviewDetails({navigation}){
    return(
        <View style={globalStyle.container}>
            <Text style={{fontFamily: 'Roboto-regular', fontSize: 24}}>
                {navigation.getParam('name')}
            </Text>
            <Text>{navigation.getParam('email')}</Text>
        </View>
    )
}
