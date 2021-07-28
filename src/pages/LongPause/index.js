import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Countdown from '../../components/Countdown';

const LongPause = () => {
  return (
    <View style={styles.container}>
      <Text>Long Pause</Text>
      <View style={styles.countBackground}>
        <Countdown valueMinutes={30} valueSeconds={0} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  countBackground: {
    width: '90%',
    height: '70%',
    backgroundColor: '#2ecc71',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 100,
    borderRadius: 20,
  },
});

export default LongPause;
