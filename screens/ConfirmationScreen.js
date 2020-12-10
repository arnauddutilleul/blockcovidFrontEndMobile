'use strict';
import 'react-native-gesture-handler';
import React from 'react';
import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Button,
} from 'react-native';
import iid from '@react-native-firebase/iid';

let STORAGE_KEY = '@storage_Key';


const ConfirmationScreen = ({navigation}) => {

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY,value)
        } catch (e) {
            console.log('Error AsyncStorage.setItem :'+e)
        }
    }

    const onPress = async () => {
        const token = await iid().getToken();
        console.log('Voici mon token : ' + token);
        try {
            axios.post('https://api-blockcovid.herokuapp.com/citoyen/create', {
                id: DeviceInfo.getUniqueId(),
                fireBaseToken:token
            })
                .then(function (response) {
                    storeData(DeviceInfo.getUniqueId())
                    navigation.navigate('Scan')
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (e) {
            console.log("Errrrrrrror : " + e)
        }

    };

    return (
        <View
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
            }}>

            <Button
                title="Je confirme ma participation"
                onPress={onPress}
            />
        </View>
    );
};

export default ConfirmationScreen;
