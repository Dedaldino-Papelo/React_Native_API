import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';


SplashScreen.preventAutoHideAsync()

const Home = () => {
  const [fontsLoaded] = useFonts({
    'dancing-regular': require('../assets/fonts/DancingScript-Regular.ttf'),
    'dancing-bold': require('../assets/fonts/DancingScript-Bold.ttf'),
  })
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <View style={style.container} onLayout={onLayoutRootView}>
      <Text style={{fontFamily: 'dancing-regular', fontSize: 24, color: '#fff'}}>Home Page</Text>
      <Text style={{fontFamily: 'dancing-bold', fontSize: 24, color: '#fff'}}>Dancing Script</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        padding: 34
    },
})
export default Home
