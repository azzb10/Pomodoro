import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Countdown from '../../components/Countdown';

const Working = () => {
  return (
    <View style={styles.container}>
      <Text>Working</Text>
      <View style={styles.countBackground}>
        <Countdown valueMinutes={25} valueSeconds={0} />
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
    backgroundColor: '#e74c3c',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 100,
    borderRadius: 20,
  },
});

export default Working;
