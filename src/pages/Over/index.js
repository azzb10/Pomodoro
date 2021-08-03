import React from 'react';
import {View, StyleSheet} from 'react-native';

import {PageHeader, Card} from '../../components';
import assets from '../../assets/assets';

const Over = () => {
  const item = assets.gif5;

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <PageHeader
          title="Congratulations"
          subtitle="Well Done! Click on continue to go to the next Pomodoro!"
        />
      </View>
      <Card item={item} color={'#4834d4'} page="Over" buttonText={'Continue'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#686de0',
  },
  pageHeader: {
    margin: 30,
    justifyContent: 'center',
  },
});

export default Over;
