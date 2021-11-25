import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Styles} from '../Assets/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native-gesture-handler';

export default function Outbox() {
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = useState();
  const [noOutbox , setNoOutbox] = useState(false);
  const getData = async () => {
    var asyncData = await AsyncStorage.getItem('messages');

    var asyncJSON = JSON.parse(asyncData);
    var outbox = asyncJSON.filter(item => {
      return item.location === 'Outbox';
    });
    console.log('mybox', outbox);
    if(outbox.length===0){
        setNoOutbox(prev=>prev=true);
    }
    setData(outbox);
  };

  return (
    <ScrollView>
      {noOutbox ? <Text style={[Styles.font ,  {alignSelf:'center' , margin:100}]}>No messages!</Text>:data?.map((item, index) => {
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
