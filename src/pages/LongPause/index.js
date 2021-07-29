import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import assets from '../../assets/assets';
import LottieComponent from '../../components/LottieComponent';
import Countdown from '../../components/Countdown';

const LongPause = () => {
  const item = assets.gif4;
  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <Text style={styles.title}>Long Pause</Text>
        <Text style={styles.subtitle}>
          Take a 15 - 30 minutes break from your task
        </Text>
      </View>
      <View style={styles.countBackground}>
        <View style={styles.animation}>
          <LottieComponent item={item} />
        </View>
        <Countdown valueMinutes={20} valueSeconds={0} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e74c3c',
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
  countBackground: {
    width: '90%',
    height: '60%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 60,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  animation: {
    height: '60%',
    width: '100%',
  },
});

export default LongPause;
