import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AuthLoadingScreen from "./Components/AuthLoading"
import SignInScreen from "./Components/SignIn"
import HomeScreen from "./Components/HomeScreen"
import ChocolateList from "./Components/ChocolateList"
import ChocolateBrands from "./Components/ChocolateBrands"
import Chocolate_Details from "./Components/Chocolate_details"
import Brand_Details from "./Components/Brand_details"

const MainStack = createStackNavigator(
  {
   Home: HomeScreen,
   ChocolateList: ChocolateList,
   Chocolate_Details: Chocolate_Details,
   ChocolateBrands: ChocolateBrands,
   Brand_Details: Brand_Details
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
);

// const ListStack = createStackNavigator(
//   {
//     ChocolateList: ChocolateList,
//     Chocolate_Details: Chocolate_Details
//   },
//   {
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       }
//     }
//   }
// )

// const BrandStack = createStackNavigator(
//   {
//     ChocolateBrands: ChocolateBrands
//   },
//   {
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       }
//     }
//   }
// )

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
)

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainStack,
    Auth: AuthStack,
    // List: ListStack,
    // Brand: BrandStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)