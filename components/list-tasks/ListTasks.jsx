import {Button, FlatList, Text, View} from "react-native";
import {styles} from "./list-tasks-style";
import {timeFormatter} from "../../core/TimeFormatter";
import React from "react";

export function ListTasks({arrayOfTodo, deleteItem, chosenDate, completeItem}) {
    return (
        <FlatList
            data={arrayOfTodo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <RenderListItem
                    item={item}
                    index={index}
                    deleteItem={deleteItem}
                    chosenDate={chosenDate}
                    completeItem={completeItem}
                />
            )}/>
    )
}
function RenderListItem({item, index, deleteItem, chosenDate, completeItem}) {

    const [is_open_actions, changeIsOpenActions] = React.useState(false);

    const toggleIsOpenActions = () => {
    is_open_actions ? changeIsOpenActions(false) : changeIsOpenActions(true)
    }
    if (item.completed === true) {
        return null;
    }
    return (
        <View key={index} style={styles.liContainer}>
            <View style={styles.li}>
                <Text>
                    {` ${ ((item.title).length > 15) ?
                        (((item.title).substring(0,12)) + '...') :
                        item.title }`}
                </Text>
            </View>
            <View
                style={styles.date}>
                <Text>
                    {item.dead_line?`Срок до ${timeFormatter(item.dead_line)}` : `Без дедлайна`}
                </Text>
            </View>
                {!is_open_actions?<Button
                    title={'action'}
                    onPress={toggleIsOpenActions}
                /> : null}
                {is_open_actions?<View>
                        <View
                            style={styles.complete}>
                            <Text style={styles.completeText} onPress={() => {completeItem(index)}}>Complete</Text>
                        </View>
                        <View
                            style={styles.delete}>
                            <Text style={styles.deleteText} onPress={() => {deleteItem(index)}}>Delete</Text>
                        </View>
                    </View>
                    :null}
        </View>
    )
}