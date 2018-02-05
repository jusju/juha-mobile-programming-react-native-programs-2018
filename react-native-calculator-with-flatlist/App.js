import React from 'react';
import {FlatList, StatusBar, StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {first: '', second: '', result: 0, data: []};
    

    console.log(this.state.data); // => ['banana', 'apple', 'orange'] 
  }

  addThis = () => {
    this.setState(
      {result: ((parseInt(this.state.first) + parseInt(this.state.second)) + ''),
      data:[...this.state.data, {key: this.state.first + ' + ' + 
        this.state.second + ' = ' + (parseInt(this.state.first) + parseInt(this.state.second))}]
      }
    );
    //Alert.alert(this.state.result);
  };

  minusThis = () => {
    
    this.setState(
      {result: ((parseInt(this.state.first) - parseInt(this.state.second)) + ''),
      data:[...this.state.data, {key: this.state.first + ' - ' + 
        this.state.second + ' = ' + (parseInt(this.state.first) - parseInt(this.state.second))}]
      }
    );
    //Alert.alert(this.state.result);
  };

  buttonPressed= () =>{this.setState({data:[...this.state.data, {key: this.state.text}], text : ''});}

  render() {
    return (
      <View style={{height:100, flex:1}}>

        <View style={{flex:1}}></View>
        
        <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
          <Text>Result: </Text>
          <Text>{this.state.result}</Text>
          <TextInput keyboardType='numeric' style={{width: 200, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(first) => this.setState({first})}
            value={this.state.first}
          />
          <TextInput keyboardType='numeric' style={{width: 200, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(second) => this.setState({second})}
            value={this.state.second}
          />
        
        </View>
        <View style={{flex:2, flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
          <Button style={{marginRight: 50}} onPress={this.addThis} title="+" />
          <Button onPress={this.minusThis} title="-" />  
        </View>
        <View style={{flex:2, flexDirection: 'column', alignItems:'center', justifyContent:'space-around'}}>
          <Text>History</Text>
          <FlatList data={this.state.data} renderItem={
            ({item}) =><Text >{item.key} </ Text>
          }
         />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
