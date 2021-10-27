import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View,Text} from 'react-native';
import {AddNewTask} from "../../components/add-new-task/addNewTask";
import {ListTasks} from "../../components/list-tasks/ListTasks";
import {Header} from "../../components/header/Header";
import {ContentHeader} from "../../components/content-header/ContentHeader";
import Constants from 'expo-constants';
import {ListTasksCompleted} from "../../components/list-tasks-completed/ListTasksCompleted";


export default function MainPage() {

    const [currentValue, onChangeText] = React.useState("");
    const [arrayOfTodo, addNewItemInArray] = React.useState([]);
    const [is_render_add_new_task, changeIsRenderInput] = React.useState(false);
    const [is_render_data_piker, changeIsRenderDataPiker] = React.useState(false);
    const [chosenDate, setChosenDate] = React.useState(null);
    const [variate_date, changeVariateDate] = React.useState(false);
    const [visibility_chosen_date, visibilityChosenDate] = React.useState(null);
    const [is_render_completed_view, changeIsRenderCompletedView] = React.useState(false);

    const pushItem = () => {
        if (currentValue !== '') {

            let date = variate_date? chosenDate : null

            let new_array = [...arrayOfTodo]
            new_array.push({
                title: currentValue,
                dead_line: date,
                completed: false,
                date_complete: null
            })
            addNewItemInArray(new_array)
            onChangeText('')
            setChangedDate(new Date())
            changeVariateDate(false)
            visibilityChosenDate(null)
            changeIsRenderInput(false)
            setChosenDate(null)
        }
    }
    const completeItem = (index) => {
        let new_array = [...arrayOfTodo]

        new_array[index].completed = true
        new_array[index].date_complete = new Date()

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
        changeIsRenderDataPiker(false)
        setChosenDate(currentDate);
        changeVariateDate(true)
        visibilityChosenDate(currentDate)
    };

    return (
            <View style={styles.container}>
                <StatusBar/>
                <Header
                    is_render_completed_view={is_render_completed_view}
                    changeIsRenderCompletedView={changeIsRenderCompletedView}
                />
                {is_render_completed_view ?
                    <Text style={styles.newHeader}>
                        Выполненые
                    </Text>
                :
                <ContentHeader
                    arrayOfTodo={arrayOfTodo}
                    is_render_add_new_task={is_render_add_new_task}
                    changeIsRenderInput={changeIsRenderInput}/>
                }
                {is_render_completed_view ?
                    <ListTasksCompleted
                        arrayOfTodo={arrayOfTodo}
                        deleteItem={deleteItem}
                        completeItem={completeItem}/>
                :
                is_render_add_new_task ?
                    <AddNewTask
                        onChangeText={onChangeText}
                        pushItem={pushItem}
                        is_render_data_piker={is_render_data_piker}
                        setChangedDate={setChangedDate}
                        changeIsRenderDataPiker={changeIsRenderDataPiker}
                        currentValue={currentValue}
                        visibility_chosen_date={visibility_chosen_date}/>
                    :
                    <ListTasks
                        arrayOfTodo={arrayOfTodo}
                        deleteItem={deleteItem}
                        completeItem={completeItem}/>

                }
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    newHeader: {
        fontSize: 20,
        marginVertical: 10
    },
});