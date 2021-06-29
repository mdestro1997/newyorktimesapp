import { combineReducers } from "redux";
// import { reducer as formReducer } from 'redux-form';

import newYorkTimesData from "./fetchData";

export default combineReducers({ 

    // form:formReducer,
    newYorkTimesData:newYorkTimesData
      
 })