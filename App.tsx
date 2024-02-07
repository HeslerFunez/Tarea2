/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Perfil_VG from './pantallas/perfil_vg';
import Inicio from './pantallas/inicio';
import Perfil from './pantallas/perfil';
import LinusT from './pantallas/linusT';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
      name='Home'
      component={Inicio}
    />
    <Stack.Screen
      name='Mi Persona'
      component={Perfil}
    />
    <Stack.Screen
      name='linusT'
      component={LinusT}
    />
  </Stack.Navigator>
  </NavigationContainer>;
}

export default App;
