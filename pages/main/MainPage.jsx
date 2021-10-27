import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View,} from 'react-native';
import {AddNewTask} from "../../components/add-new-task/addNewTask";
import {ListTasks} from "../../components/list-tasks/ListTasks";
import {Header} from "../../components/header/Header";
import {ContentHeader} from "../../components/content-header/ContentHeader";
import Constants from 'expo-constants';


export default function MainPage({navigation}) {

    const [currentValue, onChangeText] = React.useState("");
    const [arrayOfTodo, addNewItemInArray] = React.useState([]);
    const [is_render_add_new_task, changeIsRenderInput] = React.useState(false);
    const [is_render_data_piker, changeIsRenderDataPiker] = React.useState(false);
    const [chosenDate, setChosenDate] = React.useState(new Date());
    const [variate_date, changeVariateDate] = React.useState(false);
    const [visibility_chosen_date, visibilityChosenDate] = React.useState(null);

    const pushItem = () => {
        if (currentValue !== '') {

            let date = variate_date? chosenDate : null

            let new_array = [...arrayOfTodo]
            new_array.push({
                title: currentValue,
                dead_line: date,
                completed: false
            })
            addNewItemInArray(new_array)
            onChangeText('')
            setChangedDate(new Date())
            changeVariateDate(false)
            visibilityChosenDate(null)
            changeIsRenderInput(false)
        }
    }
    const completeItem = (index) => {
        let new_array = [...arrayOfTodo]

        new_array[index].completed = true

        addNewItemInArray(new_array);
        new_array.length === 0 ? changeIsRenderInput(false) : null
    }
    const deleteItem = (index) => {
        let new_array = [...arrayOfTodo]
        new_array.splice(index, 1);
        addNewItemInArray(new_array);
        new_array.length === 0 ? changeIsRenderInput(false) : null
    }
    const setChangedDate = (event, selectedDate) => {
        const currentDate = selectedDate || chosenDate;
        setChosenDate(currentDate);
        changeVariateDate(true)
        changeIsRenderDataPiker(false)
        visibilityChosenDate(currentDate)
    };

    return (
            <View style={styles.container}>
                {/*<StatusBar/>*/}
                <Header
                    navigation={navigation}/>

                <ContentHeader
                    arrayOfTodo={arrayOfTodo}
                    is_render_add_new_task={is_render_add_new_task}
                    changeIsRenderInput={changeIsRenderInput}/>

                {is_render_add_new_task ?
                    <AddNewTask
                        onChangeText={onChangeText}
                        pushItem={pushItem}
                        is_render_data_piker={is_render_data_piker}
                        chosenDate={chosenDate}
                        setChangedDate={setChangedDate}
                        changeIsRenderDataPiker={changeIsRenderDataPiker}
                        currentValue={currentValue}
                        visibility_chosen_date={visibility_chosen_date}/>
                    :
                    <ListTasks
                        arrayOfTodo={arrayOfTodo}
                        chosenDate={chosenDate}
                        deleteItem={deleteItem}
                        completeItem={completeItem}/>
                }
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});