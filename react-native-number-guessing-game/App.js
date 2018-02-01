import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {text:''}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Guess a number between 1-100</Text>

        <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}} 
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}/>

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
