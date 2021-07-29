import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import assets from '../../assets/assets';
import Countdown from '../../components/Countdown';
import LottieComponent from '../../components/LottieComponent';

const Working = () => {
  const item = assets.gif2;
  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <Text style={styles.title}>Working</Text>
        <Text style={styles.subtitle}>
          Focus on the work until the clock stops
        </Text>
      </View>
      <View style={styles.countBackground}>
        <View style={styles.animation}>
          <LottieComponent item={item} />
        </View>
        <Countdown valueMinutes={25} valueSeconds={0} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8feea1',
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

export default Working;
