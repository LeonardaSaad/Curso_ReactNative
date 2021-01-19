import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => (
    <View style={style.container}>
        <Text style={style.title}>{ props.title }</Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: '#5f9afa',
    
        alignItems: 'center',
    },

    title: {
        fontSize: 30,
        color: '#fff',
    }
})

export default Header;
