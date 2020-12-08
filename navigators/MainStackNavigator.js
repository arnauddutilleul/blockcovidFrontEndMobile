import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from '../screens/LoginScreen.js'
import ScanScreen from '../screens/ScanScreen.js'

const Stack = createStackNavigator();

const MainStackNavigator = () => {

        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Scan" component={ScanScreen}/>
            </Stack.Navigator>
        );

}

export default MainStackNavigator;
