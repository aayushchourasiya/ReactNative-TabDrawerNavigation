import {StyleSheet} from 'react-native';
export const Styles = StyleSheet.create({
  font: {
    fontSize: 30,
    color: "black"
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    padding: 3,
    fontSize: 20,
    borderLeftWidth: 5,
    marginTop: 5,
    marginBottom: 10,
    paddingLeft: 10,
    borderBottomWidth: 3,
    borderRadius:10
},
  button: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'black',
  },
  message:{
    flex: 1,
    backgroundColor: '#B5D0F9',
    borderWidth:5,
    borderRadius:25,
    borderColor:'#EBF1F0',
    padding: 10
  },
  details:{
      fontSize:20,
      color:'black'
  }
});
