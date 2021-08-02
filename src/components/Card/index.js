import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import {LottieComponent, Countdown} from '../';

const Card = ({item, minutes = null, color, button = false, text = null}) => {
  if (button) {
    return (
      <View style={styles.container}>
        <View style={styles.animation}>
          <LottieComponent item={item} />
        </View>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: color}]}
          //onPress={}
        >
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.animation}>
          <LottieComponent item={item} />
        </View>
        <Countdown minutes={minutes} color={color} />
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
