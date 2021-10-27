import React from "react";
import { Text, View} from "react-native";
import {styles} from "./content-header-style";


export function ContentHeader({
                                  arrayOfTodo,
                                  is_render_add_new_task,
                                  changeIsRenderInput
                           }) {


    return (
        arrayOfTodo.length === 0 ? <View>
                    <Text style={styles.titleInput}>Пожалуйста создайте вашу первую Задачу</Text>
                    {!is_render_add_new_task ? <View style={styles.addTodo}>
                            <Text onPress={() => {
                                changeIsRenderInput(true)}} style={styles.addTodoIcon}>+</Text>
                        </View>
                        :
                        null
                    }
                </View>
                :
                <View style={styles.titleContainer}>
                    <Text style={styles.titleInput}>Список ваших задач</Text>
                    {!is_render_add_new_task ? <View style={styles.addTodo}>
                            <Text onPress={() => {
                                changeIsRenderInput(true)}} style={styles.addTodoIcon}>+</Text>
                        </View>
                        :
                        null
                    }
                </View>
    )
}
