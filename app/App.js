import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNav from './modules/navigation/mainStackNav';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNav />
    </NavigationContainer>
  );
};

export default App;
