import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './NavigationServices';
import AnimationScreen from '../screens/AnimationScreen';
import Localisation from '../screens/Localisation';
import ContentScreen from '../screens/ContentScreen';
import Home from '../screens/Home';
import '../screens/i18n';
import DragAndDrop from '../screens/DragAndDrop';
import MarqueeText from '../screens/MarqueeText';
import LogoSpinner from '../screens/LogoSpinner';
import ExampleFile from '../screens/ExampleFile';

const Stack = createNativeStackNavigator();

export default function RootStack({initialRouteName}) {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={initialRouteName}>
        <Stack.Screen name="ExampleFile" component={ExampleFile} />
        <Stack.Screen name="LogoSpinner" component={LogoSpinner} />
        <Stack.Screen name="MarqueeText" component={MarqueeText} />
        <Stack.Screen name="DragAndDrop" component={DragAndDrop} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Localisation" component={Localisation} />
        <Stack.Screen name="ContentScreen" component={ContentScreen} />
        <Stack.Screen name="AnimationScreen" component={AnimationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
