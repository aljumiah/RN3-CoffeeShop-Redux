import React from "react";
import { createStackNavigator } from "react-navigation";

import Profile from "../Components/Profile";
import Login from "../Components/Login";
import CoffeeList from "../Components/CoffeeList";

const AuthStack = createStackNavigator(
  {
    Profile: Profile,
    Login: Login
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default AuthStack;
