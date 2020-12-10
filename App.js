/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

'use strict';
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './navigators/MainStackNavigator';


class App extends Component {

    render() {
        return (
            <NavigationContainer>
                <MainStackNavigator/>
            </NavigationContainer>
        );
    }


}


export default App;
