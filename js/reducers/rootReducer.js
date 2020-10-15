import {combineReducers} from 'redux';
import movieReducers from './movieReducers';

const rootReducer = combineReducers({
  movieReducers: movieReducers,
});

export default rootReducer;
