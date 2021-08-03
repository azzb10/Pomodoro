import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

import {LottieComponent, Countdown} from '../';

const Card = ({item, color, page = '', minutes = null, buttonText = null}) => {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      // eslint-disable-next-line no-shadow
      setCount(count => count + 1);
    }, []),
  );
  if (page === 'Main' || page === 'Over') {
    return (
      <View style={styles.container}>
        <View style={styles.animation}>
          <LottieComponent item={item} />
        </View>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: color}]}
          onPress={() => navigation.navigate('Working')}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        {page === 'Over' ? (
          <TouchableOpacity
            style={[styles.cancelButton, {color: color}]}
            onPress={() => navigation.navigate('Main')}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    );
  } else if (page === 'Working') {
    if (count < 4) {
      return (
        <View style={styles.container}>
          <View style={styles.animation}>
            <LottieComponent item={item} />
          </View>
          <Countdown minutes={minutes} color={color} toPage={'SmallPause'} />
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.navigate('Main')}>
            <Text style={{color: color}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.animation}>
          <LottieComponent item={item} />
        </View>
        <Countdown minutes={minutes} color={color} toPage={'LongPause'} />
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.navigate('Main')}>
          <Text style={{color: color}}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.animation}>
          <LottieComponent item={item} />
        </View>
        <Countdown
          minutes={minutes}
          color={color}
          toPage={page === 'SmallPause' ? 'Working' : 'Over'}
        />
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.navigate('Main')}>
          <Text style={{color: color}}>Cancel</Text>
        </TouchableOpacity>
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
