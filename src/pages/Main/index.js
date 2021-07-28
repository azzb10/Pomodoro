import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Start Pomodoro</Text>
      <TouchableOpacity
        style={styles.button}
        //onPress={}
      >
        <Text>Start Pomodoro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  button: {
    backgroundColor: '#e74c3c',
    margin: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 80,
    width: 250,
    height: 80,
  },
});

export default Main;
