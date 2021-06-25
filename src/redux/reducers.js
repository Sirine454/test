import {FILTER_BY_NAME ,SEARCH_BY_FLETTER } from "./types";

const initialState={
    cocktails:[],
    
 
};
export default function (state= initialState, action){
     
switch (action.type) {
      case FILTER_BY_NAME :
            return {...state,
            cocktails:action.payload,
         
      }
      case SEARCH_BY_FLETTER :
            return{...state,
                  cocktails:action.payload
               
               
            }

      default:
           return state
}}