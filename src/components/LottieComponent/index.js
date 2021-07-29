import React from 'react';
import LottieView from 'lottie-react-native';

const LottieComponent = () => {
  return (
    <LottieView
      source={require('../../assets/64627-time-management-lottie-animation.json')}
      autoPlay
      loop
    />
  );
};

export default LottieComponent;
