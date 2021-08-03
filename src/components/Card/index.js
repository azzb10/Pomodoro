import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {LottieComponent, Countdown} from '../';

let count = 0;

const Card = ({item, color, page = '', minutes = null}) => {
  const navigation = useNavigation();
  if (page === 'Main') {
    return (
      <View style={styles.container}>
        <View style={styles.animation}>
          <LottieComponent item={item} />
        </View>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: color}]}
          onPress={() => navigation.navigate('Working')}>
          <Text style={styles.buttonText}>Start Pomodoro</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (page === 'Working') {
    if (count < 4) {
      count++;
      return (
        <View style={styles.container}>
          <View style={styles.animation}>
            <LottieComponent item={item} />
          </View>
          <Countdown minutes={1} color={color} toPage="SmallPause" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.animation}>
          <LottieComponent item={item} />
        </View>
        <Countdown minutes={1} color={color} toPage="LongPause" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.animation}>
          <LottieComponent item={item} />
        </View>
        <Countdown minutes={minutes} color={color} toPage="Working" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '70%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 40,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  animation: {
    height: '60%',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    width: '80%',
    height: '15%',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Card;
