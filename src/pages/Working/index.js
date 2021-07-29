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
    height: '60%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    padding: 20,
    margin: 60,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
});

export default Working;
