import React from "react";
import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./navigation/CustomDrawer";
import axios from 'axios'
import { createStore, applyMiddleware  } from "redux";
//import {  legacy_createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/tab/rootReducer";
import SplashScreen from "react-native-splash-screen";

import {
    SignUp,
    ForgotPassword,
    Search,
    Otp
} from './screens/index';

import {
    FoodDetail,
    Checkout,
    MyCart,
    Success,
    AddCard,
    MyCard,
    DeliveryStatus,
    Map
} from "./screens";


import SignIn from "./screens/Authentication/SignIn";
import { OnBoarding } from "./screens/OnBoarding/OnBoarding";

const Stack = createStackNavigator();

const store= createStore(
    rootReducer,
    applyMiddleware(thunk)
)

const App = () => {
    React.useEffect(() => {
        SplashScreen.hide()
       // console.log("gfjwjkfjkgdjh");
   //     const hi = axios.get("http://192.168.10.17:3002/n");
     //   console.log(hi)
    },[])

    return ( 
          <Provider store={store}>
            <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                //initialRouteName={'Home'}
                // initialRouteName={'OnBoarding'}
                //initialRouteName={'FoodDetail'}
            >
                 {/* <Stack.Screen
                    name="FoodDetail"
                    component={FoodDetail}
                /> */}

                
                 <Stack.Screen
                    name="onBoarding"
                    component={OnBoarding}
                />
                 <Stack.Screen
                    name="Home" 
                    component={CustomDrawer}
                /> 
                 <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />
                 {/* <Stack.Screen
                    name="Otp"
                    component={Otp}
                /> */}
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />

               
               
                <Stack.Screen
                    name="MyCart"
                    component={MyCart}
                />
                <Stack.Screen
                name="Search"
                component={Search}
                />

               
                
                
                <Stack.Screen
                    name="Success"
                    component={Success}
                    options={{ gestureEnabled : false }}
                />
                
                <Stack.Screen
                    name="Checkout"
                    component={Checkout}
                />

                 {/*             
                <Stack.Screen
                    name="AddCard"
                    component={AddCard}
                /> */}

                {/* <Stack.Screen
                    name="MyCard"
                    component={MyCard}
                /> */}

                <Stack.Screen
                    name="DeliveryStatus"
                    component={DeliveryStatus}
                    options={{ gestureEnabled : false}}
                />

                <Stack.Screen
                    name="Map"
                    component={Map}
                />

               

            </Stack.Navigator>
        </NavigationContainer> 

          </Provider>
              
    )
}
export default App;