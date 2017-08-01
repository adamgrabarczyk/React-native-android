// import React, {Component} from 'react'
// import { } from 'react-native'

'use strict';

import LoginForm from './LoginForm'

const React = require('React');
const ReactNative = require('react-native');

const {StyleSheet, View, Image, Text,
    KeyboardAvoidingView
} = ReactNative;

const {Component
} = React;

export default class Login extends Component  {
    render() {
    return (

            <KeyboardAvoidingView behavior='padding'  style={styles.container}>
<View style={styles.logoContainer}>
    <Image
        style={styles.logo}
        source={require('./images/logo.svg')}/>
    <Text style={styles.title}>Webscy App</Text>
</View>
                <View style={styles.formContainer}>
                    <LoginForm/>
                </View>
            </KeyboardAvoidingView>
    );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
      alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.8
    }
});