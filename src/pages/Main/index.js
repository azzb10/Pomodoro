import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import PageHeader from '../../components/PageHeader';
import LottieComponent from '../../components/LottieComponent';

const Main = () => {
  return (
    <View style={styles.container}>
      <PageHeader />
      <View style={styles.introduction}>
        <View style={styles.animation}>
          <LottieComponent
            item={require('../../assets/64627-time-management-lottie-animation.json')}
          />
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
  pageHeader: {
    margin: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
  },
  introduction: {
    width: '90%',
    height: '60%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    padding: 20,
    margin: 60,
    borderRadius: 20,
    justifyContent: 'space-between',
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
    height: '60%',
    width: '100%',
  },
});

export default Main;
