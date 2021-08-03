import React from 'react';
import {View, StyleSheet} from 'react-native';

import {PageHeader, Card} from '../../components';
import assets from '../../assets/assets';

const Over = () => {
  const item = assets.gif1;

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <PageHeader
          title="MyPomodoro"
          subtitle="Beat procrastination and improve focus one pomodoro at a time"
        />
      </View>
      <Card
        item={item}
        color={'#e74c3c'}
        page="Over"
        buttonText={'Start Pomodoro'}
      />
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
});

export default Over;
