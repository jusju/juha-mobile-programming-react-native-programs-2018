import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {first: '', second: '', result: 0}
  }

  addThis = () => {
    this.setState(
      {result: (parseInt(this.state.first) + parseInt(this.state.second)) + ''}
    );
    //Alert.alert(this.state.result);
  };

  minusThis = () => {
    this.setState(
      {result: (parseInt(this.state.first) - parseInt(this.state.second)) + ''}
    );
    //Alert.alert(this.state.result);
  };

  render() {
    return (
      <View style={styles.container}>
      <Text>Result: </Text>
      <Text>{this.state.result}</Text>
        <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(first) => this.setState({first})}
          value={this.state.first}
        />
        <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(second) => this.setState({second})}
          value={this.state.second}
        />
      <Button onPress={this.addThis} title="+" />
      <Button onPress={this.minusThis} title="-" />
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
