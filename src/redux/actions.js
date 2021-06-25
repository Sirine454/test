
import {FILTER_BY_NAME,SEARCH_BY_FLETTER} from './types'
export const filterCocktails=(cocktails)=>
{
    return{
    type:FILTER_BY_NAME,
    payload:cocktails
    }
}
export const SearchCocktails=(cocktails)=>
{
    return{
    type:SEARCH_BY_FLETTER,
    payload:cocktails
    }
}

