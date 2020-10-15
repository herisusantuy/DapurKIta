import * as types from '../constant/actionType';
import axios from 'axios';
import {BASE_URL, API_KEY} from '../constant/general';

export const getNowPlayingRequest = () => ({
  type: types.GET_NOW_PLAYING_REQUEST,
});

export const getNowPlayingSuccess = (movies) => ({
  type: types.GET_NOW_PLAYING_SUCCESS,
  nowPlaying: movies,
});

export const getNowPlayingFailure = (error) => ({
  type: types.GET_NOW_PLAYING_FAILURE,
  error,
});

export const getNowPlayingAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getNowPlayingRequest);
      const res = await axios.get(`${BASE_URL}/now_playing?api_key=${API_KEY}`);
      console.log('res', res.data.results);
      dispatch(getNowPlayingSuccess(res.data.results));
    } catch (error) {
      dispatch(getNowPlayingFailure(error));
    }
  };
};
