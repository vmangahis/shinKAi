const animeLists = {


};

const animeReducer = (state= animeLists, action) => {

    switch(action.type){
        case "GET_ANIME":
            return animeLists;

        default: return animeLists;
    }

}

export default animeReducer;