import { StyleSheet } from 'react-native';

const SearchStyles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 8,
        marginHorizontal: 10,
        flexDirection: 'row',
        marginTop: 7,
        marginBottom: 7,
    },
    iconStyle: {
        alignSelf: 'center',
        marginHorizontal: 15,
        color: 'red',
    },
    inputStyles: {
        flex: 1,
        color: 'red',
    },
});

export default SearchStyles;