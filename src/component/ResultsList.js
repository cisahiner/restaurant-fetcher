import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {

return (

 <View style={styles.container}>
  <Text style={styles.title}> {title}</Text>
  <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={result=> result.id} //donen her result icin IDyı kez olarak kullanorum
      renderItem={({ item }) => {  //burada item bizim result objectimiz
      return (
          <TouchableOpacity onPress={() => navigation.navigate('ResultsShow')}>
            <ResultsDetail result={item}/> 
          </TouchableOpacity>
      ); 
    }}
  />
 </View>
 );
};

const styles  = StyleSheet.create({
 title:
 {
     fontSize: 18,
     fontWeight: 'bold',
     marginLeft: 15,
     marginBottom:5
 },
 container:{
     marginBottom: 10
 }

});

export default ResultsList;