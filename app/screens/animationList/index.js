/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {strings} from './../../services/utils/strings';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';

const AnimationList = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.ScrollView}
        contentContainerStyle={{alignItems: 'center'}}>
        {strings.screens.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.btnContainer}
              onPress={() => navigation.navigate(item.label)}>
              <Text style={styles.btnText}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnimationList;
