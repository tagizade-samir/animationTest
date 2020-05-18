import {Animated, Easing} from 'react-native';

const animationValue = new Animated.Value(0);

export const animations = {
  rotation: animationValue.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: ['0deg', '90deg', '180deg', '270deg', '360deg'],
  }),
  scale: animationValue.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: [0.5, 0.8, 1.1, 1.4, 1.7],
  }),
  translateX: animationValue.interpolate({
    inputRange: [0, 1, 2, 3, 4],
    outputRange: [0.5, 0.8, 1.1, 1.4, 1.7],
  }),
};

export const rotateAnimation = () => {
  return Animated.loop(
    Animated.timing(animationValue, {
      toValue: 4,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();
};

export const scaleAnimation = () => {
  return Animated.loop(
    Animated.timing(animationValue, {
      toValue: 4,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();
};

export const translateAnimation = () => {
  return Animated.loop(
    Animated.timing(animationValue, {
      toValue: 4,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();
};
