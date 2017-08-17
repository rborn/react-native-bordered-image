import React, { Component } from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';

const borderViewStyleKeys = [
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderColor',
    'borderRadius',
    'borderStyle',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderWidth',
    'width',
    'height'
];

const deleteStyleKeys = [
    'borderBottomColor',
    'borderBottomWidth',
    'borderColor',
    'borderLeftColor',
    'borderLeftWidth',
    'borderRightColor',
    'borderRightWidth',
    'borderStyle',
    'borderTopColor',
    'borderTopWidth',
    'borderWidth'
];

export default class BorderedImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = StyleSheet.flatten(this.props.style);
        let wrapperStyle = Object.assign({}, style);
        wrapperStyle.overflow = 'hidden';

        let imageStyle = Object.assign({}, style);

        let borderViewStyle = {
            position: 'absolute'
        };

        deleteStyleKeys.forEach(key => {
            delete wrapperStyle[key];
            delete imageStyle[key];
        });

        if (Platform.OS === 'ios') {
            delete imageStyle.borderRadius;
        }

        borderViewStyleKeys.forEach(key => {
            borderViewStyle[key] = style[key];
        });

        return (
            <View style={wrapperStyle}>
                <Image {...this.props} style={imageStyle} />
                <View style={borderViewStyle} />
            </View>
        );
    }
}
