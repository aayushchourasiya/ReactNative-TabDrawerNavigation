import React from 'react';
import Feed from './Feed';
import Messages from './Messages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

export default function Home() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          let iconName;
          let colorName;
          if (route.name === 'Feed') {
            iconName = require('../Assets/home.png');
            colorName = focused ? "blue" : "black";
          } else if (route.name === 'Messages') {
            iconName = require('../Assets/message.png');
            colorName = focused ? "blue" : "black";
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{width: 35, height: 35 , tintColor:colorName}}/>;
        },
      })}>
      <Tab.Screen name="Feed" component={Feed} options={{headerShown:false}}/>
      <Tab.Screen name="Messages" component={Messages} options={{headerShown:false , unmountOnBlur:true}}/>
    </Tab.Navigator>
  );
}
