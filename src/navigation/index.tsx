import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const renderTabIcon = (
    route: any,
    color: string,
    size: number,
  ) => {
    let iconName;
    switch (route.name) {
      case "Home":
        iconName = 'newspaper';
        break;
      case "Search":
        iconName = 'feature-search';
        break;
      default:
        iconName = 'newspaper';
        break;
    }
    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({color, size}) =>
            renderTabIcon(route, color, size),
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'white',
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;