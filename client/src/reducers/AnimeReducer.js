import {v4 as uuidv4} from 'uuid';
import {GET_ANIME, DEL_ANIME, ADD_ANIME} from '../actions/types';

const initialState = {

    anime:[    {id:   uuidv4(), anime_title: "AOT"  , air_date: "2013-04-06T16:00:00.000+00:00 - 2013-04-06T16:00:00.000+00:00", episode: 25, status: "complete" , img_url: "https://i.imgur.com/7uOdUl5.jpg"},
        {id:   uuidv4(), anime_title: "Chuuni" , air_date: "2013-04-06T16:00:00.000+00:00 - 2013-04-06T16:00:00.000+00:00", episode: 25, status: "complete", img_url: "https://i.imgur.com/7uOdUl5.jpg" },
        {id:   uuidv4(), anime_title: "SAO"  , air_date: "2013-04-06T16:00:00.000+00:00 - 2013-04-06T16:00:00.000+00:00", episode: 25, status: "complete" , img_url: "https://i.imgur.com/7uOdUl5.jpg"},
        {id:   uuidv4(), anime_title: "Anime"  , air_date: "2013-04-06T16:00:00.000+00:00 - 2013-04-06T16:00:00.000+00:00", episode: 25, status: "complete" , img_url: "https://i.imgur.com/7uOdUl5.jpg"},
        {id:   uuidv4(), anime_title: "Anime"  , air_date: "2013-04-06T16:00:00.000+00:00 - 2013-04-06T16:00:00.000+00:00", episode: 25, status: "complete" , img_url: "https://i.imgur.com/7uOdUl5.jpg"}]
};

const animeReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case GET_ANIME:
            return {
                ...state, 
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