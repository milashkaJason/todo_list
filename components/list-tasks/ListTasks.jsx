import {Button, FlatList, Alert, Modal, Text, Pressable, View} from "react-native";
import {styles} from "./list-tasks-style";
import {timeFormatter} from "../../core/TimeFormatter";
import React from "react";
import {CheckIcon, CloseIcon} from "../../icons/icons";

export function ListTasks({arrayOfTodo, deleteItem, chosenDate, completeItem}) {
    return (
        <FlatList
            data={arrayOfTodo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <RenderListItem
                    onPress={() => {
                    }}
                    item={item}
                    index={index}
                    deleteItem={deleteItem}
                    completeItem={completeItem}
                />
            )}/>
    )
}
function RenderListItem({item, index, deleteItem, completeItem}) {

    const [is_open_actions, changeIsOpenActions] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [setIdActiveItem, changeSetIdActiveItem] = React.useState(false);


    const toggleIsOpenActions = () => {
    is_open_actions ? changeIsOpenActions(false) : changeIsOpenActions(true)
    }
    if (item.completed === true) {
        return null;
    }
    return (



                <View key={index} style={styles.liContainer}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                        changeSetIdActiveItem(null)
                    }}
                >
                    <View style={styles.modalWrapper}>
                        <View>
                            <Text>
                                {setIdActiveItem}
                            </Text>
                        </View>
                    </View>
                </Modal>
                    <View
                        style={styles.li} >
                        <Text
                            onPress={() =>{
                                setModalVisible(true)
                                changeSetIdActiveItem(item.title)
                            }}>
                            {` ${ ((item.title).length > 15) ?
                                (((item.title).substring(0,12)) + '...') :
                                item.title }`}
                        </Text>
                    </View>
                    <View
                        style={styles.date}>
                        <Text
                            onPress={() =>{
                                setModalVisible(true)
                                changeSetIdActiveItem(item.title)
                            }}>
                            {item.dead_line?`Срок до ${timeFormatter(item.dead_line)}` : `Без дедлайна`}
                        </Text>
                    </View>
                    {!is_open_actions?<Button
                        title={'action'}
                        onPress={toggleIsOpenActions}
                    /> : null}
                    {is_open_actions?<View style={styles.listContainer}>
                            <View
                                style={styles.complete}>
                                <CheckIcon style={styles.checkIcon} onPress={() => {
                                    Alert.alert("Задача выполнена");
                                    changeIsOpenActions(false)
                                    completeItem(index)}}/>
                            </View>
                            <View
                                style={styles.delete}>
                                <CloseIcon style={styles.closeIcon} onPress={() => {
                                    Alert.alert("Задача удалена");
                                    changeIsOpenActions(false)
                                    deleteItem(index)}}/>
                            </View>
                        </View>
                        :null}
                </View>

    )
}