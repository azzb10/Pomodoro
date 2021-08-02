import React from 'react';
import {View, StyleSheet} from 'react-native';

import {PageHeader, Card} from '../../components';
import assets from '../../assets/assets';

const Main = () => {
  const item = assets.gif1;

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <PageHeader
          title="MyPomodoro"
          subtitle="Beat procrastination and improve focus one pomodoro at a time"
        />
      </View>
      <Card item={item} color="#e74c3c" button={true} text="Start Pomodoro" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e67e22',
  },
  pageHeader: {
    margin: 30,
    justifyContent: 'center',
  },
  introduction: {
    width: '90%',
    height: '60%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    padding: 20,
    margin: 60,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#e74c3c',
    margin: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 80,
    width: 250,
    height: 80,
  },
  animation: {
    height: '60%',
    width: '100%',
  },
});

export default Main;
