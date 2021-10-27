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
        borderRadius: 50,
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    complete: {
        backgroundColor: "#23ab00",
        borderRadius: 50,
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },
    closeIcon: {
        color: '#fff',
        height: 18,
        width: 18
    },
    checkIcon: {
        color: '#fff',
        height: 18,
        width: 18
    },
    date: {
        marginRight: 'auto'
    },
    listContainer: {
        flexDirection: "row"
    },
    modalWrapper: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100,
        paddingHorizontal: 20
    }
});