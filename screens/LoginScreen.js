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
                title="Go to Scan Screen"
                onPress={() =>
                navigation.navigate('Scan', { name: 'Brandon' })
            }
            />

        </View>

        
    )
}

export default LoginScreen
