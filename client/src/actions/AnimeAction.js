import {GET_ANIME, DEL_ANIME, ADD_ANIME} from './types';

export const getAnime = () =>{
    return{
        type: GET_ANIME
    }
}


export const delAnime = id =>{
    return{
        type: DEL_ANIME,
        load: id
    }
}

export const addAnime = () => {
    return{
        type:ADD_ANIME
    }
}