'use strict';

import React from 'react';
import DeviceInfo from 'react-native-device-info';
import axios from 'axios';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';


import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const ScanScreen = ({navigation, route}) => {
    let codeQR = '';
    let scanner = null;
    let onRead = e => {
        codeQR = e.data;
        console.log(codeQR);
        axios.post('https://api-blockcovid.herokuapp.com/citoyen/scanne', {
            idCitoyen: DeviceInfo.getUniqueId(),
            idQrCode: codeQR,
        })
            .then(function (response) {
                Alert.alert(
                    'Code Scanned !',
                    'You have just scanned a QR code (' + codeQR + ')',
                    [
                        {
                            text: 'OK', onPress: () => {
                                scanner.reactivate();
                                console.log('OK Pressed');
                            },
                        },
                    ],
                    {cancelable: false},
                );
                console.log(response.status);
            })
            .catch(function (error) {
                Alert.alert(
                    'Server Error',
                    'Please check with the developers',
                    [
                        {
                            text: 'OK', onPress: () => {
                                scanner.reactivate();
                                console.log('OK Pressed');
                            },
                        },
                    ],
                    {cancelable: false},
                );
                console.log(error);
            });
    };

    return (
        <QRCodeScanner
            ref={(node) => {
                scanner = node;
            }}
            onRead={onRead}
            //flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
                <Text style={styles.centerText}>Veuillez scanner un code QR</Text>
            }
            bottomContent={
                <Text>{codeQR}</Text>
            }
        />
    );


};

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
});

export default ScanScreen;
