import React from 'react';
import { FlatList, ActivityIndicator, Text, View ,Image } from 'react-native';

class Form extends React.Component {
  render(){

    return(
      <View style={{paddingTop:20 ,height:120}}>
      <Image 
          style={{width: 150, height: 90,marginLeft:120,}}
          source={{uri:'https://png.clipart.me/previews/6e8/weather-icon-psd-45670.jpg'}}
        />
      </View>
    );
  }
}

export default Form;
