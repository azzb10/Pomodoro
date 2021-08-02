import React from 'react';
import {View, StyleSheet} from 'react-native';

import assets from '../../assets/assets';
import {PageHeader, LottieComponent, Countdown} from '../../components';

const LongPause = () => {
  const item = assets.gif4;
  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <PageHeader
          title="Long Pause"
          subtitle="Take a 15 - 30 minutes break from your task"
        />
      </View>
      <View style={styles.countBackground}>
        <View style={styles.animation}>
          <LottieComponent item={item} />
        </View>
        <Countdown minutes={30} color="#e74c3c" />
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
