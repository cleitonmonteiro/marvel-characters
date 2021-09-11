import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharactersList from '../screens/CharactersList';
import CharactersDetails from '../screens/CharactersDetails';
import {SCREENS} from './constants';
import {StatusBar} from 'native-base';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS.CharactersList}
          component={CharactersList}
          options={{title: 'Marvel Characters'}}
        />
        <Stack.Screen
          name={SCREENS.CharactersDetails}
          component={CharactersDetails}
          options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
