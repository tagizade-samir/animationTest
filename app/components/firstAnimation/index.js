import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import {styles} from '../styles';
import {animations, rotateAnimation} from './../../services/utils/animations';

const FirstAnimation = ({navigation}) => {
  const [btnPressed, setBtnPressed] = useState(false);

  return (
    <>
      <View style={styles.animationContainer}>
        <Animated.View
          style={[
            styles.animatedView,
            {transform: [{rotate: animations.rotation}]},
          ]}
        />
        <Animated.Image
          style={[
            styles.animatedImage,
            {transform: [{rotate: animations.rotation}]},
          ]}
          source={require('../../src/img/file.png')}
        />
        <Animated.Text
          style={[
            styles.animatedText,
            {transform: [{rotate: animations.rotation}]},
          ]}>
          This text is animated
        </Animated.Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          disabled={btnPressed}
          style={styles.btnTouchable}
          onPress={() => {
            setBtnPressed(true);
            rotateAnimation();
          }}>
          <Text style={styles.btnText}>Start animation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnTouchable}
          onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Go back</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FirstAnimation;
