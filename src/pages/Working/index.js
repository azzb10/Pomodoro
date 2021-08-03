import React from 'react';
import {View, StyleSheet} from 'react-native';

import assets from '../../assets/assets';
import {PageHeader, Card} from '../../components';

const Working = () => {
  const item = assets.gif2;
  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <PageHeader
          title="Working"
          subtitle="Focus on the work until the clock stops"
        />
      </View>
      <Card item={item} color={'#8feea1'} page="Working" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8feea1',
  },
  pageHeader: {
    margin: 30,
    justifyContent: 'center',
  },
});

export default Working;
