/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

'use strict';

import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const onSuccess = (e) => {
  };
  return (
      <QRCodeScanner
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
          topContent={
            <Text style={styles.centerText}>Bienvenue sur BlockCovid</Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>
                Clique pas ici, ça va rien faire
              </Text>
            </TouchableOpacity>
          }
      />
  );
};

const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
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

export default App;
