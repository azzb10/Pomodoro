import React from 'react';
import {View, StyleSheet} from 'react-native';

import assets from '../../assets/assets';
import {PageHeader, Card} from '../../components';

const SmallPause = () => {
  const item = assets.gif3;
  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <PageHeader
          title="Small Pause"
          subtitle="Take a 5 minutes break from your task"
        />
      </View>
      <Card item={item} page="SmallPause" color={'#3498db'} minutes={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  pageHeader: {
    margin: 30,
    justifyContent: 'center',
  },
});
export default SmallPause;
