import {StyleSheet} from 'react-native';

const searchFromStyles = StyleSheet.create({
    container: {
        width: '95%',
        height: 290,
        backgroundColor: 'red',
        marginHorizontal: '2.5%',
        marginTop: '10%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'space-around',
        position: 'relative',
        padding: 10,
        borderRadius: 3,
        borderBottomRightRadius: 0,
    },
    smallBox: {
        width: '47%',
        height: 55,
        borderRadius: 3,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    bigBox: {
        width: '100%',
        height: 55,
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: 'white',
    },
    textInBox: {
        width: '100%',
        height: '100%',
        textAlignVertical: 'center',
        paddingHorizontal: 10,
    },
    searchButton: {
        alignSelf: 'flex-end',
        marginRight: 10,
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default searchFromStyles;
