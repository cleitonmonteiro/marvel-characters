import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CharactersScreen from '../screens/CharactersScreen';
import CharactersDetails from '../screens/CharactersDetails';
import {SCREENS} from './constants';
import Favorites from '../screens/Favorites';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.CHARACTERS_SCREEN}
        component={CharactersScreen}
        options={{title: 'Marvel Characters'}}
      />
      <Stack.Screen
        name={SCREENS.CHARACTERS_DETAILS}
        component={CharactersDetails}
        options={{title: 'Details'}}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const props = {
              Characters: {
                iconName: focused ? 'list' : 'list',
              },
              Favorites: {
                iconName: focused ? 'favorite' : 'favorite-outline',
              },
            };

            return (
              <Icon
                testID={`icon-${props[route.name].iconName}`}
                name={props[route.name].iconName}
                color={color}
                size={size}
              />
            );
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          options={{headerShown: false}}
          name="Characters"
          component={StackNavigator}
        />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
