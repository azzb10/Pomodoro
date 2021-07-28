import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Countdown = () => {
  const [count, setCount] = useState(25);
  const countdown = () => {
    setCount(count => count - 1);
  };

  useEffect(() => {
    setInterval(() => {
      countdown();
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Working</Text>
      <View style={styles.countBackground}>
        <Text>{count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Countdown;
