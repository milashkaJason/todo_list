import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    liContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        width: '100%',
        paddingHorizontal: 20
    },
    li: {
        width: '50%'
    },
    delete: {
        backgroundColor: "red",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    complete: {
        backgroundColor: "blue",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginBottom: 10
    },
    deleteText: {
        color: '#fff'
    },
    completeText: {
        color: '#fff'
    },
    date: {
        marginRight: 'auto'
    },

});