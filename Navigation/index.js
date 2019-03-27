import { createAppContainer } from "react-navigation";
import React from "react";

// import CoffeeCart from "../Components/CoffeeCart";
// import CoffeeDetail from "../Components/CoffeeDetail";
// import CoffeeList from "../Components/CoffeeList";
// import HomePage from "../Components/HomePage";
// import Login from "../Components/Login";
import BottomNav from "./BottomNav";

// const ourStack = createStackNavigator(
//   {
//     CoffeeCart: CoffeeCart,
//     CoffeeList: CoffeeList,
//     CoffeeDetail: CoffeeDetail,
//     Login: Login
//   },
//   {
//     initialRouteName: "Login",
//     cardStyle: {
//       backgroundColor: "rgb(20,90,100)"
//     },
//     defaultNavigationOptions: {
//       headerTintColor: "#fff",
//       headerStyle: {
//         backgroundColor: "rgb(20,90,100)"
//       },
//       headerTitleStyle: {
//         fontWeight: "bold"
//       }
//     }
//   }
// );

const AppContainer = createAppContainer(BottomNav);

export default AppContainer;
