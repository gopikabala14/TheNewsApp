import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppScreens} from './screens';
import { Home } from "../screens/Home/Home";
// import { SignUp } from "../screens/Auth/SignUp";

// const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
// export function AuthNavigation() {
//   return (
//     <AuthStack.Navigator>
//       <AuthStack.Screen
//         name={AppScreens.SignupScreen.name}
//         component={AppScreens.SignupScreen.component}
//       />
//        <AuthStack.Screen
//         name={AppScreens.SignInScreen.name}
//         component={AppScreens.SignInScreen.component}
//       />
//     </AuthStack.Navigator>
//   );
// }

export function HomeNavigation() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={AppScreens.HomeScreen.name}
        component={AppScreens.HomeScreen.component}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={AppScreens.NewsDetailScreen.name}
        component={AppScreens.NewsDetailScreen.component}
      />
       <HomeStack.Screen
        name={AppScreens.ReadLaterScreen.name}
        component={AppScreens.ReadLaterScreen.component}
      />
    </HomeStack.Navigator>
  );
}
