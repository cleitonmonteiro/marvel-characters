import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CharactersScreen from '../screens/CharactersScreen';
import CharactersDetails from '../screens/CharactersDetails';
import {SCREENS} from './constants';
import Favorites from '../screens/Favorites';
import ShareIcon from '../components/ShareIcon';
import CharactersSearch from '../screens/CharactersSearch';
import {IconButton, useTheme} from 'native-base';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.CHARACTERS_SCREEN}
        component={CharactersScreen}
        options={({navigation}) => ({
          title: 'Marvel Characters',
          headerRight: _ => (
            <IconButton
              icon={<Icon name="search" size={24} />}
              onPress={() => navigation.navigate(SCREENS.CHARACTERS_SEARCH)}
            />
          ),
        })}
      />
      <Stack.Screen
        name={SCREENS.CHARACTERS_DETAILS}
        component={CharactersDetails}
        options={{title: 'Details'}}
      />
      <Stack.Screen
        name={SCREENS.CHARACTERS_SEARCH}
        component={CharactersSearch}
        options={{title: 'Search'}}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const {colors} = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: colors.primary[500],
          tabBarIcon: ({focused, color, size}) => {
            const props = {
              Home: {
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
        })}>
        <Tab.Screen
          options={{headerShown: false}}
          name="Home"
          component={StackNavigator}
        />
        <Tab.Screen
          name="Favorites"
          options={{headerRight: _ => <ShareIcon />}}
          component={Favorites}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
