import React, {createRef, useState} from 'react';
import {View, Text, TouchableHighlight, TextInput, Switch, ToastAndroid} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './Profile';
import {Styles} from '../Assets/Styles';
import {AsyncFile} from '../Helper/AsyncFile';

export default function Feed() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={FeedBox} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

function FeedBox({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [message, setMessage] = useState('');

  const lnameRef = createRef();
  const messageRef = createRef();

  const toggleSwitch = () => {
    setIsEnabled(prev => !prev);
  };
  const buttonClick = () => {
    if (fName === '' || lName === '' || message === '') {
      alert('Please fill all fields before submitting!');
    } else {
      ToastAndroid.show("Saved" , ToastAndroid.SHORT);
      const location = isEnabled ? 'Outbox' : 'Inbox';
      navigation.navigate('Profile', {
        fName: fName,
        lName: lName,
        message: message,
        location: isEnabled ? 'Outbox' : 'Inbox',
      });
      AsyncFile(fName, lName, message, location);
      setFName("");
      setLName("");
      setMessage("");
      setIsEnabled(false);
    }
  };
  return (
    <View style={Styles.center}>
      <Text style={Styles.font}>Enter Your Details:</Text>
      <TextInput
        style={Styles.input}
        placeholder="Enter Your First Name!"
        value={fName}
        onChangeText={text => setFName(text)}
        returnKeyType="next"
        onSubmitEditing={()=>lnameRef.current.focus()}
      />
      <TextInput
        style={Styles.input}
        placeholder="Enter Your Last Name!"
        value={lName}
        onChangeText={text => setLName(text)}
        returnKeyType="next"
        ref={lnameRef}
        onSubmitEditing={()=>messageRef.current.focus()}
      />
      <Text style={{fontSize: 20, color: 'black'}}>Drop this message in:</Text>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: 200,
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>Inbox</Text>
        <Switch
          trackColor={{false: 'black', true: 'black'}}
          thumbColor={isEnabled ? 'red' : 'magenta'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={{fontSize: 20, color: 'black'}}>Outbox</Text>
      </View>
      <TextInput
        style={Styles.input}
        placeholder="Enter Your Message!"
        multiline={true}
        value={message}
        onChangeText={text => setMessage(text)}
        returnKeyType="done"
        ref={messageRef}
      />
      <TouchableHighlight style={Styles.button} onPress={buttonClick}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
          Submit
        </Text>
      </TouchableHighlight>
    </View>
  );
}
