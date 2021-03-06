import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import {styles} from '../styles';
import {
  animations,
  translateAnimation,
} from './../../services/utils/animations';

const SecondAnimation = ({navigation}) => {
  const [btnPressed, setBtnPressed] = useState(false);

  return (
    <>
      <View style={styles.animationContainer}>
        <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateX: animations.translateX}]},
          ]}
        />
        <Animated.Image
          style={[
            styles.animatedImage,
            {transform: [{translateX: animations.translateX}]},
          ]}
          source={require('../../src/img/file.png')}
        />
        <Animated.Text
          style={[
            styles.animatedText,
            {transform: [{translateX: animations.translateX}]},
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
            translateAnimation();
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

export default SecondAnimation;
