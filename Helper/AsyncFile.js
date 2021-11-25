import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncFile = async (fName, lName, message, location) => {
  var asyncData = await AsyncStorage.getItem('messages');
  var arr = []
  if (asyncData) {
      var asyncJSON = JSON.parse(asyncData);
      await AsyncStorage.removeItem('messages');
      var newValue = {fName:fName,lName:lName,message:message,location:location};
      asyncJSON.push(newValue);
      await AsyncStorage.setItem('messages' , JSON.stringify(asyncJSON));
      console.log(asyncJSON);
} else {
      var newArr = {fName:fName,lName:lName,message:message,location:location};
      arr.push(newArr);
    try {
      await AsyncStorage.setItem('messages', JSON.stringify(arr));
      console.log(newArr);
    } catch (e) {
      // saving error
    }
  }
};
export {AsyncFile};
