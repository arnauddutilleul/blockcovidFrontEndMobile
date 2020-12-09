'use strict';
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    AppRegistry,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Linking,
    Button,
} from 'react-native';


const ConfirmationScreen = ({navigation}) => {

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@storage_Key',value)
        } catch (e) {
            console.log('Error AsyncStorage.setItem :'+e)
        }
    }

    const onPress = () => {
        console.log("hhhhhhhhh")
        try{
            axios.post('https://api-blockcovid.herokuapp.com/citoyen/create', {
                id: DeviceInfo.getUniqueId(),
            })
                .then(function (response) {
                    console.log("okokokokok")
                    storeData(DeviceInfo.getUniqueId())
                    navigation.navigate('Scan', {name: 'Brandon'})
                })
                .catch(function (error) {
                    console.log(error);
                });
        }catch (e){
            console.log("Errrrrrrror : "+e)
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
            <Text>Your ID is {DeviceInfo.getUniqueId()}</Text>
        </View>


    );
};

export default ConfirmationScreen;
