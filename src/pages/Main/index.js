import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LottieComponent from '../../components/LottieComponent';

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={{height: '5%'}}></View>
      <View style={styles.introduction}>
        <Text>
          The Pomodoro Technique is a time management method for students,
          perfectionists, and procrastinators of all kinds
        </Text>
        <View style={styles.animation}>
          <LottieComponent />
        </View>
        <TouchableOpacity
          style={styles.button}
          //onPress={}
        >
          <Text>Start Pomodoro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e67e22',
  },
  introduction: {
    width: '90%',
    height: '80%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 20,
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
  animation: {
    height: '50%',
    width: '100%',
  },
});

export default Main;
