import React from 'react';
import {View, StyleSheet} from 'react-native';

import assets from '../../assets/assets';
import {PageHeader, Card} from '../../components';

const LongPause = () => {
  const item = assets.gif4;
  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <PageHeader
          title="Long Pause"
          subtitle="Take a 20 minutes break from your task"
        />
      </View>
      <Card item={item} page={'LongPause'} color={'#e74c3c'} minutes={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e74c3c',
  },
  pageHeader: {
    margin: 30,
    justifyContent: 'center',
  },
});

export default LongPause;
