import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ( {term, onTermChange, onTermSubmit} ) => {
   
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle}/> 
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style ={styles.inputStyle} 
            placeholder="Search"
            value={term}
            onChangeText= {onTermChange} //change text oldugunda bu functionu cagir
            onEndEditing={onTermSubmit}
            />
        </View>
    );


};

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row' // feather ve text ayni linede gosterilior

    },
    inputStyle: {
        flex: 1, //use up as much space possible
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }


});

export default SearchBar;