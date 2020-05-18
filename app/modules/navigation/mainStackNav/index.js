import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AnimationList from './../../../screens/animationList/index';
import FirstAnimation from '../../../components/firstAnimation';
import SecondAnimation from './../../../components/secondAnimation/index';
import ThirdAnimation from './../../../components/thirdAnimation/index';

const RootStackNav = createStackNavigator();

const MainStackNav = () => {
  return (
    <RootStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStackNav.Screen name="Animation List" component={AnimationList} />
      <RootStackNav.Screen name="First animation" component={FirstAnimation} />
      <RootStackNav.Screen
        name="Second animation"
        component={SecondAnimation}
      />
      <RootStackNav.Screen name="Third animation" component={ThirdAnimation} />
    </RootStackNav.Navigator>
  );
};

export default MainStackNav;
