import {useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {

    const [results, setResults] = useState([]); //default is empty array
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm=> {
    console.log('Hi there');
      try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50, // bu kullandıgım apinin parami ondan cıkmıor otomatik
                term: searchTerm, //kullanıcının girdigi kelime mesela pasta
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
    }  catch (err) {
        setErrorMessage('Something went wrong.');
    }
    };

    useEffect(()=> {
        searchApi('pasta');

    }, []);
    


    return [searchApi, results, errorMessage];

};