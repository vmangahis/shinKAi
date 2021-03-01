import {v4 as uuidv4} from 'uuid';
import {GET_ANIME, DEL_ANIME, ADD_ANIME} from '../actions/types';

const initialState = {

    anime:[]
};
const animeReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case GET_ANIME:
            return {
                ...state, 
                anime:[action.data]
            }
            break;

        case DEL_ANIME:
            return{
                ...state,
                anime: state.anime.filter((state) => state.id !== action.load)
            }
            break;

        

        default:
            return state;
            break;
    }
}
export default animeReducer;