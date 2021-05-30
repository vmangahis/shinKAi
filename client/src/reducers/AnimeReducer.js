import {GET_ANIME, REM_ANIME, ADD_WATCHLIST} from '../actions/types';
import thunk from 'redux-thunk';

const initialState = {

    anime:[],
    watchlist: []
};


const animeReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case GET_ANIME:
            return {
                ...state, 
                anime: state.watchlist.length === 0 ? action.data : action.data.filter(data => !state.watchlist.some(watchdata => watchdata._id === data._id))
                }
            

        
        case REM_ANIME:
            let filteredWatchlist = state.watchlist.filter(data => action.payload !== data._id);
            return{
                ...state,
                watchlist : filteredWatchlist
            }

       

        case ADD_WATCHLIST:
            return  {
                ...state,
                watchlist:  state.watchlist.concat(state.anime.filter(data => data._id === action.load)),
                anime: state.anime.filter((state) => state._id !== action.load)
            }
            

        default:
            return state;
            break;
    }
}
export default animeReducer;