import React from 'react';
import {StyleSheet, View} from 'react-native';

import {LottieComponent, Countdown} from '../';

const Card = ({item, minutes, color}) => {
  return (
    <View style={styles.container}>
      <View style={styles.animation}>
        <LottieComponent item={item} />
      </View>
      <Countdown minutes={minutes} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '75%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 40,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  animation: {
    height: '60%',
    width: '100%',
  },
});

export default Card;
