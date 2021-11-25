import React from 'react';
import {View, Text} from 'react-native';
import { Styles } from '../Assets/Styles';

export default function Profile({route}) {
  const {fName , lName , message , location} = route.params;
  return (
    <View style={Styles.center}>
      <Text style={Styles.font}>First Name : {fName}</Text>
      <Text style={Styles.font}>Last Name : {lName}</Text>
      <Text style={Styles.font}>Message : {message}</Text>
      <Text style={Styles.font}>Location : {location}</Text>
    </View>
  );
}
