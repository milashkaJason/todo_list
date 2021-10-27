import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "600",
    },
    header: {
        backgroundColor: '#d93535',
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 5,
        color: '#fff',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    btnHeader: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 12,
        paddingBottom: 15,
        borderRadius: 3
    },
    btnText: {
        color: '#000'

    }
});