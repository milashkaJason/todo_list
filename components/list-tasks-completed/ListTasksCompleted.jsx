import {Button, FlatList, Modal, Text, View} from "react-native";
import {styles} from "./list-tasks-completed-style";
import {timeFormatter} from "../../core/TimeFormatter";
import React from "react";
import {CheckIcon, CloseIcon} from "../../icons/icons";

export function ListTasksCompleted({arrayOfTodo, deleteItem, completeItem}) {
    return (
        <FlatList
            data={arrayOfTodo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <RenderListItem
                    item={item}
                    index={index}
                    deleteItem={deleteItem}
                    completeItem={completeItem}
                />
            )}/>
    )
}
function RenderListItem({item, index}) {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [setIdActiveItem, changeSetIdActiveItem] = React.useState(false);


    if (item.completed === false) {
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
            <View style={styles.li}>
                <Text onPress={() =>{
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
                <Text onPress={() =>{
                    setModalVisible(true)
                    changeSetIdActiveItem(item.title)
                }}>
                    {item.date_complete?`Выполнено ${timeFormatter(item.date_complete)}`:null}
                </Text>
            </View>
        </View>
    )
}