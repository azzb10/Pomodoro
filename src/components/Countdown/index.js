import React from 'react';
import {View, StyleSheet} from 'react-native';
import CountDown from 'react-native-countdown-component';

const Countdown = ({minutes, color}) => {
  return (
    <View>
      <CountDown
        until={60 * minutes}
        size={30}
        onFinish={() => alert('Finished')}
        digitStyle={[styles.counterStyle, {borderColor: color}]}
        digitTxtStyle={styles.counterText}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'Min', s: 'Sec'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  counterText: {
    color: '#000',
  },
  counterStyle: {
    backgroundColor: '#fffefe',
    borderWidth: 2,
  },
});

export default Countdown;
