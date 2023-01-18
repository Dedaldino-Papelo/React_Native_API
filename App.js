import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { createStackNavigator } from '@react-navigation/stack';
import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native'
/* import Navigator from './routes/drawer' */
import Home from './screens/Home'
import ReviewDetails from './screens/ReviewDetails'
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={style.container} onLayout={onLayoutRootView}>    
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Review Details" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  }
})