import axios from 'axios';

export const fetchData = () =>{

    const apiKey = 'K9MC3YG8SOpTUmcTBlMztw5wQ1fvAkMt';
    return async function( dispatch,getState ){

        const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${apiKey} `);
        console.log(response);
        dispatch({ type: 'FETCH_DATA', payload: response })
    }

}