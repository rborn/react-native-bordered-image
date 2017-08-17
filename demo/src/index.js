/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import BorderedImage from 'react-native-bordered-image';

export default class demo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <BorderedImage
                    style={[styles.image, styles.one]}
                    source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
                />
                <BorderedImage
                    style={[styles.image, styles.two]}
                    source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
                />
                <BorderedImage
                    style={[styles.image, styles.three]}
                    source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
                />
                <BorderedImage
                    style={[styles.image, styles.four]}
                    source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333'
    },
    image: {
        margin: 20,
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: 'white',
        borderStyle: 'solid'
    },
    one: {
        borderRadius: 30,
        borderWidth: 3
    },
    two: {
        borderBottomLeftRadius: 0,
        borderRadius: 20
    },
    three: {
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 50,
        borderRadius: 20,
        borderStyle: 'dotted'
    },
    four: {
        borderRadius: 0,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 30,
        borderStyle: 'dashed'
    }
});

AppRegistry.registerComponent('demo', () => demo);
