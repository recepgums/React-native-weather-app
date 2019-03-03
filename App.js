import React from 'react';
import Form from "./Form";
import { FlatList, ActivityIndicator, Text, View ,TextInput,Style,Button ,Image} from 'react-native';

export default class FetchExample extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  state = {
        sehir:''
    };
 
  componentDidMount(sehir){
    const aranan_sehir=this.state.sehir;
  const api_key="32006d921d3741a98a4211406192702";
    return fetch('http://api.worldweatheronline.com/premium/v1/weather.ashx?key='+api_key+'&q='+aranan_sehir+'&format=json&num_of_days=5')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.data.weather
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render(){
    
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
       
      <Form />
        <TextInput style={{marginLeft:70,borderBottomColor:'gray',borderWidth: 0.5,width:250}}
        placeholder="Şehir"
        onChangeText={(value) => this.setState({sehir: value})}
        value={this.state.sehir}
    />
        <FlatList
          data={this.state.dataSource }
          renderItem={({item}) => 
          <View>
          
              <Text>{ "  \nEn yüksek sicaklik: "+item.mintempC + "\n"+"En düşük sicaklik: "+item.maxtempC}</Text>
              <Button title={item.date} ></Button>
          </View>
          }
          keyExtractor={({id}) => id}
        />
      
    <Button
        title="HAVA DURUMUNU GÖSTER"
        onPress={() => 
            {
             {{this.componentDidMount(this.state.sehir)}}
            }
        }
    />
      </View>
    );
  }
}
