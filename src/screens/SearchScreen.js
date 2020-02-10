import React, {useState} from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import SearchBar from '../component/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../component/ResultsList';

const SearchScreen = ({ navigation }) => {

    const [term, setTerm] = useState(''); 
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {

        return results.filter( result => {
            return result.price === price;
        });
      
    };

    return (

        <>  
            <SearchBar 
            term={term} 
            onTermChange={(newTerm)=> setTerm(newTerm)} 
            onTermSubmit={searchApi}
            />
        {errorMessage ? <Text>{errorMessage}</Text> : null }
        
            <ScrollView>
                <ResultsList 
                results={filterResultsByPrice('$')} 
                title="Cost Effective"
                navigation={navigation}/>
                <ResultsList 
                results={filterResultsByPrice('$$')} 
                title="Bit Pricier"         
                navigation={navigation}/>
                <ResultsList 
                results={filterResultsByPrice('$$$')}  
                title="Big Spender"
                navigation={navigation}/>
            </ScrollView>
        </>

    );


};

const styles = StyleSheet.create({});

export default SearchScreen;