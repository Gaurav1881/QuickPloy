import React, {Component} from 'react';

import {Text, View, TextInput, StyleSheet} from 'react-native';

class AuthMain extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.inputBox}
            placeholder="email"
            onChangeText={username => this.setState({username})}
            value={this.state.username}
          />
          <TextInput
            style={styles.inputBox}
            secureTextEntry={true}
            placeholder="password"
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  inputBox: {
    paddingLeft: 20,
    margin: 20,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 50,
  },
});

export default AuthMain;
