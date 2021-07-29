import React from 'react';
import LottieView from 'lottie-react-native';

const LottieComponent = ({item}) => {
  return <LottieView source={item} autoPlay loop />;
};

export default LottieComponent;
