import React from 'react';
import {Alert, Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {text:'', rightNumber: '50', advice: 'Guess a number between 1-100' }
  }

    guessThis = () => {
      
      if(parseInt(this.state.text) < parseInt(this.state.rightNumber)) {
        this.setState(
          {advice: 'Too low value!'}
        );
      } else if(parseInt(this.state.text) > parseInt(this.state.rightNumber)) {
        this.setState(
          {advice: 'Too big value!'}
        );
      } else {
        this.setState(
          {advice: 'You got it right!'}
        );
      }
      //Alert.alert(this.state.text);
    };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.advice}</Text>

        <TextInput keyboardType='numeric' style={{width:200, borderColor: 'gray', borderWidth:1}} 
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}/>

        <Button onPress={this.guessThis} title="MAKE A GUESS" />

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
