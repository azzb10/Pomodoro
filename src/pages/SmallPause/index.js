import React from 'react';
import {View, StyleSheet} from 'react-native';

import assets from '../../assets/assets';
import {PageHeader, LottieComponent, Countdown} from '../../components';

const SmallPause = () => {
  const item = assets.gif3;
  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <PageHeader
          title="Small Pause"
          subtitle="Take a 5 minutes break from your task"
        />
      </View>
      <View style={styles.countBackground}>
        <View style={styles.animation}>
          <LottieComponent item={item} />
        </View>
        <Countdown minutes={5} color="#3498db" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
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
export default SmallPause;
