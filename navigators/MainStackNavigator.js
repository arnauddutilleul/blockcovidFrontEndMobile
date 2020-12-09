import React, {useEffect, Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ConfirmationScreen from '../screens/ConfirmationScreen.js';
import {
    View, Text,
} from 'react-native';
import ScanScreen from '../screens/ScanScreen.js';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();

class MainStackNavigator extends Component {

    state = {
        token: '',
    };

    constructor() {
        super();
        this.getData();
    }

    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Key');
            if (value !== null) {
                this.setState({token: value});
            }
        } catch (e) {
            console.log('Error in getItem : ' + e);
        }
    };

    render() {
        if (this.state.token !== null) {
            console.log('OK c\'est bon');
            console.log('Mon id du get data : ' +this.state.token);
            return (
                <Stack.Navigator>
                    <Stack.Screen name="Scan" component={ScanScreen}/>
                </Stack.Navigator>
            );
        } else {
            console.log('ça pue !');
            return (
                <Stack.Navigator>
                    <Stack.Screen name="Confirmation" component={ConfirmationScreen}/>
                    <Stack.Screen name="Scan" component={ScanScreen}/>
                </Stack.Navigator>
            );
        }
    }

    // let ID = '';
    // const getData = async () => {
    //     try {
    //         ID = await AsyncStorage.getItem('@storage_Key');
    //         console.log('MON ID : ' + ID);
    //         if (ID !== null) {
    //             console.log("je suis ici")
    //             return true;
    //         }else{
    //             return false;
    //         }
    //     } catch (e) {
    //         console.log('Error AsyncStorage.getItem : ' + e);
    //     }
    // };
    //
    // if (getData()) {
    //     console.log("OK c'est bon")
    //     console.log("Mon id du get data : "+ID)
    //     return (
    //         <Stack.Navigator>
    //             <Stack.Screen name="Scan" component={ScanScreen}/>
    //         </Stack.Navigator>
    //     );
    // } else {
    //     console.log("ça pue !")
    //     return (
    //         <Stack.Navigator>
    //             <Stack.Screen name="Confirmation" component={ConfirmationScreen}/>
    //             <Stack.Screen name="Scan" component={ScanScreen}/>
    //         </Stack.Navigator>
    //     );
    // }


};


export default MainStackNavigator;
