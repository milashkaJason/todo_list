import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, Linking , SectionList} from 'react-native';

export default function App() {

    const [currentValue, onChangeText] = React.useState("");
    const [arrayOfTodo, addNewItemInArray] = React.useState([]);


    return (
        <View style={styles.container}>

            <Text style={styles.title}>Приложение TODOS</Text>
            <Text style={styles.line}></Text>
            {arrayOfTodo.length === 0 ? <Text style={styles.titleInput}>Пожалуйста введите вашу первую Задачу</Text>
                :
                <Text style={styles.titleInput}>Список ваших задач</Text>}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => onChangeText(text)}
                    value={currentValue}
                    placeholder={'Текст Задачи'}
                    placeholderTextColor={'#000'}
                />
                <View
                    style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        onPress={() => {
                            let new_array = [...arrayOfTodo]
                            new_array.push(currentValue)
                            addNewItemInArray(new_array)
                            onChangeText('')
                        }}
                        title={'Press'}
                    />
                </View>
            </View>

            {arrayOfTodo.map((item, index) => {
                return (
                    <View key={index} style={styles.liContainer}>
                        <View style={styles.li}>
                            <Text>{`${index + 1}. ${item}`}</Text>
                        </View>
                        <View
                            style={styles.delete}>
                            <Text style={styles.deleteText} onPress={() => {
                                let new_array = [...arrayOfTodo]
                                new_array.splice(index, 1);
                                addNewItemInArray(new_array)
                            }}>Delete</Text>
                        </View>
                    </View>
                )
            })}

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        flex: 1,
        backgroundColor: '#29c1ff',
        alignItems: 'center',
    },
    title: {
        color: '#000',
    },
    line: {
        height: 1,
        width: '90%',
        backgroundColor: '#000',
        marginTop: 10,
    },
    titleInput: {
        fontSize: 17,
        color: '#eee',
        marginBottom: 15
    },
    input: {
        height: 35,
        width: '70%',
        borderWidth: 1,
        padding: 10,
        color: '#000',
        borderColor: '#2196f3',
    },
    buttonContainer: {
        width: '30%',
    },
    inputContainer: {
        alignSelf: "flex-start",
        flexDirection: "row",
        width: '100%',
    },
    liContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        width: '100%',
        paddingHorizontal: 20
    },
    delete: {
        backgroundColor: "red",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    deleteText: {
        color: '#fff'
    }
});
