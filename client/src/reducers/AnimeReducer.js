import {v4 as uuidv4} from 'uuid';
import {GET_ANIME, DEL_ANIME, ADD_ANIME, EXT_ANIME, ADD_WATCHLIST} from '../actions/types';


const initialState = {

    anime:[],
    watchlist:[]
};
const animeReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case GET_ANIME:
            return {
                ...state, 
                anime: state.watchlist.length === 0 ? action.data : state.watchlist.filter((listData) => state.anime.includes(listData))  
                
            }
            break;

        case DEL_ANIME:
            return{
                ...state,
                
            }
            break;

        case EXT_ANIME:
            return{
                ...state
            }
            break;

        case ADD_WATCHLIST:
            return{
                ...state,
                watchlist: state.anime.filter((data) => data._id === action.load),
                anime: state.anime.filter((state) => state._id !== action.load)
            }
            break;

        default:
            return state;
            break;
    }
}
export default animeReducer;