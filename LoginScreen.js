'use strict';
import 'react-native-gesture-handler';
import React, {Component} from 'react';
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

const LoginScreen = ({navigation}) => {
    return(
        <Button
            title="Go to Scan Screen"
            onPress={() =>
                navigation.navigate('Scan', { name: 'Brandon' })
            }
        />
    )
}

export default LoginScreen
