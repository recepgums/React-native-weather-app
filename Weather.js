import React from "react";
import { Text, View, StyleSheet,props} from 'react-native';
class Weather extends React.Component{
       render() {
    return (
      <View>
       {this.props.sicaklik}
      </View>
    );
  }
}
export default Weather;