import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import CountDown from 'react-native-countdown-component';
import {useIsFocused, useNavigation} from '@react-navigation/native';

const Countdown = ({minutes, color, toPage}) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  if (isFocused) {
    return (
      <View>
        <CountDown
          until={60 * minutes}
          size={30}
          onFinish={() => {
            navigation.navigate(`${toPage}`);
          }}
          digitStyle={[styles.counterStyle, {borderColor: color}]}
          digitTxtStyle={styles.counterText}
          timeToShow={['M', 'S']}
          timeLabels={{m: 'Min', s: 'Sec'}}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(`${toPage}`);
          }}>
          <Text>Go</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return <View />;
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
