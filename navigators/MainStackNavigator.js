import React, {useEffect, Component, useState, useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import iid from '@react-native-firebase/iid';


import ConfirmationScreen from '../screens/ConfirmationScreen.js';
import {
    View, Text, ActivityIndicator,
} from 'react-native';
import ScanScreen from '../screens/ScanScreen.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

let STORAGE_KEY = '@storage_Key';

// let ID = '';


const Stack = createStackNavigator();

async function getData() {
    try {

        const token = await iid().getToken();
        console.log("Voici mon token : "+token)
        return AsyncStorage.getItem('@storage_Key').then(response => {
            return response;
        });
    } catch (e) {
        console.log('Error AsyncStorage.getItem : ' + e);
    }
}

const MainStackNavigator = () => {
    const [ID, setID] = useState();


    // const getData = async () => {
    //     console.log("Je rentre dans le getData()")
    //      try {
    //          ID = await AsyncStorage.getItem('@storage_Key');
    //          console.log(ID);
    //          if (ID !== '') {
    //              return
    //          } else {
    //              return false;
    //          }
    //      } catch (e) {
    //          console.log('Error AsyncStorage.getItem : ' + e);
    //      }
    //  };

    getData().then(response => {
        setID(response);
    })

    if (!ID) {
        console.log('ça pue !');
        console.log('Je ne dois rien avoir comme ID => ' + ID);
        return (
            <Stack.Navigator>
                <Stack.Screen name="Confirmation" component={ConfirmationScreen}/>
                <Stack.Screen name="Scan" component={ScanScreen}/>
            </Stack.Navigator>
        );

    } else {
        console.log('Okay c\'est bon. Mon id du get data : ' + ID);
        return (
            <Stack.Navigator>
                <Stack.Screen name="Scan" component={ScanScreen}/>
            </Stack.Navigator>
        );
    }

    // return getData()
    //     .then(response => {
    //         if (response) {
    //             console.log('OK c\'est bon');
    //             console.log('Mon id du get data : ' + ID);
    //             return (
    //                 <Stack.Navigator>
    //                     <Stack.Screen name="Scan" component={ScanScreen}/>
    //                 </Stack.Navigator>
    //             );
    //         } else {
    //             console.log('ça pue !');
    //             console.log(ID);
    //             return (
    //                 <Stack.Navigator>
    //                     <Stack.Screen name="Confirmation" component={ConfirmationScreen}/>
    //                     <Stack.Screen name="Scan" component={ScanScreen}/>
    //                 </Stack.Navigator>
    //             );
    //         }
    //     });
};


export default MainStackNavigator;
