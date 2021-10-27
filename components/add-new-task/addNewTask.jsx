import React from "react";
import {Button, TextInput, View, Text} from "react-native";
import {styles} from "./add-new-task-style";
import DateTimePicker from "@react-native-community/datetimepicker";
import {CalendarIcon} from "../../icons/icons";
import {timeFormatter} from "../../core/TimeFormatter";


export function AddNewTask({
                               onChangeText,
                               pushItem,
                               is_render_data_piker,
                               chosenDate,
                               setChangedDate,
                               changeIsRenderDataPiker,
                               currentValue,
                               visibility_chosen_date
                           }) {


    return (
        <View>
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
                        onPress={pushItem}
                        title={'Press'}
                        color={'#d93535'}
                    />
                </View>
            </View>
            {is_render_data_piker && <DateTimePicker
                testID="dateTimePicker"
                value={chosenDate}
                mode={'data'}
                display="default"
                onChange={setChangedDate}
            />}
            <View style={styles.calendarButton}>
                    <CalendarIcon style={styles.calendarIcon} onPress={() =>changeIsRenderDataPiker(true)}/>
                <Text style={styles.currentDate}>
                    {visibility_chosen_date && `Выполнить до: ${timeFormatter(visibility_chosen_date)}`}
                </Text>
            </View>
        </View>
    )
}
