import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CountDown from 'react-native-countdown-component';

const Countdown = ({valueMinutes, valueSeconds}) => {
  return (
    <View>
      <CountDown
        until={60 * 10 + 30}
        size={30}
        onFinish={() => alert('Finished')}
        digitStyle={styles.counterBackground}
        digitTxtStyle={styles.counterText}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'MM', s: 'SS'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  counterText: {
    color: '#fff',
  },
  counterBackground: {
    color: '#000',
  },
});

export default Countdown;
