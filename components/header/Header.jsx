import React from "react";
import {styles} from "./header-style";
import {Button, Text, View} from "react-native";


export function Header({navigation}) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>TODO List</Text>
            <Button
            title={'Выполненые'}
            onPress={() => navigation.push('Home1')}/>
        </View>
    )
}