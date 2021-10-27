import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    input: {
        height: "100%",
        width: '70%',
        borderWidth: 1,
        paddingVertical: 1,
        paddingHorizontal: 10,
        color: '#000',
        borderColor: '#d93535',
    },
    buttonContainer: {
        width: '30%',
    },
    button: {
        backgroundColor: '#d93535',
    },
    inputContainer: {
        alignSelf: "flex-start",
        flexDirection: "row",
        width: '100%',
    },
    calendarButton: {
        height: 40,
        width: 40,
        marginTop: 10,
        marginLeft: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    calendarIcon: {
        color: '#1765d9',
    },
    currentDate: {
        width: 200,
        marginLeft: 10,
        fontSize: 15
    }
});