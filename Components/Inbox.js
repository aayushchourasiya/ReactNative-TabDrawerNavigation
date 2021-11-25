import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Styles} from '../Assets/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native-gesture-handler';

export default function Inbox() {
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = useState();
  const [noInbox , setNoInbox] = useState(false);
  const getData = async () => {
    var asyncData = await AsyncStorage.getItem('messages');

    var asyncJSON = JSON.parse(asyncData);
    var inbox = asyncJSON.filter(item => {
      return item.location === 'Inbox';
    });
    console.log('mybox', inbox);
    if(inbox.length===0){
        setNoInbox(prev=>prev=true);
    }
    setData(inbox);
  };

  return (
    <ScrollView>
      {noInbox ? <Text style={[Styles.font ,  {alignSelf:'center' , margin:100}]}>No messages!</Text>:data?.map((item, index) => {
        return (
          <View style={Styles.message} key={index}>
            <Text style={Styles.details}>First Name : {item.fName}</Text>
            <Text style={Styles.details}>Last Name : {item.lName}</Text>
            <Text style={Styles.details}>Message : {item.message}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
