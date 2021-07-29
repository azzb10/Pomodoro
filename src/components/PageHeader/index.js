import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PageHeader = () => {
  return (
    <View style={styles.pageHeader}>
      <Text style={styles.title}>MyPomodoro</Text>
      <Text style={styles.subtitle}>
        Beat procrastination and improve your focus one pomodoro at a time.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pageHeader: {
    margin: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
  },
});

export default PageHeader;
