import React, {Component} from 'react';

import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import AuthMain from './authentication/auth-main';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AuthMain />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ec8dd',
  },
});

export default App;
