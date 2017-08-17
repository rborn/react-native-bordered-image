/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import BorderedImage from '../..';

export default class demo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <BorderedImage
                    style={styles.image}
                    source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    image: {
        width: 200,
        height: 100,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        borderStyle: 'solid'
    }
});

AppRegistry.registerComponent('demo', () => demo);
