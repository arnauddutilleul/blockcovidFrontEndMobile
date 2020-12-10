import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ConfirmationScreen from '../screens/ConfirmationScreen.js';
import {
    View, Text, ActivityIndicator,
} from 'react-native';
import ScanScreen from '../screens/ScanScreen.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

let STORAGE_KEY = '@storage_Key';
let ID = '';
const Stack = createStackNavigator();


const MainStackNavigator = () => {
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        try {
            ID = await AsyncStorage.getItem(STORAGE_KEY);
            if (ID !== '') {
                setIsLoading(false);
            }
        } catch (e) {
            console.log('Error AsyncStorage.getItem : ' + e);
        }
    };

    getData();

    if (isLoading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        );
    } else {
        if (!ID) {
            return (
                <Stack.Navigator>
                    <Stack.Screen name="Confirmation" component={ConfirmationScreen}/>
                    <Stack.Screen name="Scan" component={ScanScreen}/>
                </Stack.Navigator>
            );

        } else {
            return (
                <Stack.Navigator>
                    <Stack.Screen name="Scan" component={ScanScreen}/>
                </Stack.Navigator>
            );
        }
    }
};


export default MainStackNavigator;
