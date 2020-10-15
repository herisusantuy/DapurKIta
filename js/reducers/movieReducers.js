import * as types from '../constant/actionType';

const initialState = {
  loading: false,
  nowPlaying: [],
  error: null,
};

function movieReducer(state = initialState, action) {
  switch (action.types) {
    case types.GET_NOW_PLAYING_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });
      break;
    case types.GET_NOW_PLAYING_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        nowPlaying: action.nowPlaying,
      });
      break;
    case types.GET_NOW_PLAYING_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
      break;
    default:
      return state;
  }
}

export default movieReducer;
