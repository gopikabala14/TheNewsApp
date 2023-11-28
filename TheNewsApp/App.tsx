/**
 * Sample React Native News App
 * Author: Gopika Ramanan 
 * Date: 27-11-2023
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeNavigation } from './src/navigation/navigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <HomeNavigation/>
    </NavigationContainer>
  );
}

export default App;
