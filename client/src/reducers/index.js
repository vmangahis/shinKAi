import {combineReducers} from 'redux';
import LoginTest from './LoginTest';
import AnimeReducer from './AnimeReducer';

const allReducers = combineReducers({login_auth: LoginTest, anime_reducer: AnimeReducer});

export default allReducers;