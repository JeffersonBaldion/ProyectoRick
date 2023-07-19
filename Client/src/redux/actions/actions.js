import axios from 'axios'

export const ADDFAV = "ADDFAV";
export const DELETEFAV = "DELETEFAV";
export const FILTER_GENDER = "FILTER";
export const RESET_FILTER = "RESETFILTER";


export function addFav(character) {
  const endpoint = "http://localhost:3001/favorites/";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADDFAV,
        payload: data,
      });
    });
  };
}

export function deleteFav(id) {
  const endpoint = `http://localhost:3001/favorites/${id}`;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: DELETEFAV,
        payload: data,
      });
    });
  };
}

export function filterGender(gender) {
  return { type: FILTER_GENDER, payload: gender };
}

export function resetFilter() {
  return { type: RESET_FILTER, payload: null };
}
