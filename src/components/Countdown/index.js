/* eslint-disable no-shadow */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Countdown = ({valueMinutes, valueSeconds}) => {
  const [seconds, setSeconds] = useState(valueSeconds);
  const [minutes, setMinutes] = useState(valueMinutes);

  const countdownSeconds = () => {
    setSeconds(seconds => seconds - 1);
  };

  useEffect(() => {
    setInterval(() => {
      countdownSeconds();
    }, 1000);
  }, []);

  if (seconds < 0) {
    setSeconds(59);
    if (minutes <= 0) {
      setMinutes(25);
    } else {
      setMinutes(minutes => minutes - 1);
    }
  }

  return (
    <View>
      <Text style={styles.counter}>
        {minutes}:{('00' + seconds).slice(-2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    color: '#000',
    fontSize: 70,
  },
});

export default Countdown;
