import React from 'react';
import {View, StyleSheet} from 'react-native';

import assets from '../../assets/assets';
import {PageHeader, LottieComponent, Countdown, Card} from '../../components';

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
      <View>
        <Card item={item} minutes={20} color="#e74c3c" />
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
});

export default LongPause;
