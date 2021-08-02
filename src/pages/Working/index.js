import React from 'react';
import {View, StyleSheet} from 'react-native';

import assets from '../../assets/assets';
import {PageHeader, LottieComponent, Countdown} from '../../components';

const Working = () => {
  const item = assets.gif2;
  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <PageHeader
          title="Working"
          subtitle="Focus on the work until the clock stops"
        />
      </View>
      <View style={styles.countBackground}>
        <View style={styles.animation}>
          <LottieComponent item={item} />
        </View>
        <Countdown minutes={25} color="#8feea1" />
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
