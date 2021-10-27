import React from "react";
import {styles} from "./header-style";
import {Button, Text, View} from "react-native";


export function Header({changeIsRenderCompletedView, is_render_completed_view}) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>TODO List</Text>
            <View style={styles.btnHeader}>
                {is_render_completed_view ?
                <Text onPress={() => changeIsRenderCompletedView(false)} style={styles.btnText}>Главная</Text>
                    :
                <Text onPress={() => changeIsRenderCompletedView(true)} style={styles.btnText}>Выполненные</Text>
                }
            </View>
        </View>
    )
}