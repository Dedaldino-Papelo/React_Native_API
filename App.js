import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native'
import Navigator from './routes/drawer'

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
      <Navigator />
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  }
})