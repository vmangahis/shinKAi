import {v4 as uuidv4} from 'uuid';
import {GET_ANIME, DEL_ANIME, ADD_ANIME} from '../actions/types';

const initialState = {

    animelist:[
        {id:   uuidv4(), anime_title: "AOT"   },
        {id:   uuidv4(), anime_title: "Chuuni"   },
        {id:   uuidv4(), anime_title: "SAO"   }
    ]

}

const animeReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case GET_ANIME:
            return {
                ...state, 
            }

        default:
            return state;
    }
}

export default animeReducer;