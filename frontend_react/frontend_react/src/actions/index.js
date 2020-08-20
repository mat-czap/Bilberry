import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const REMOVE_NOTE_REQUEST = 'REMOVE_NOTE_REQUEST';
export const REMOVE_NOTE_SUCCESS = 'REMOVE_NOTE_SUCCESS';
export const REMOVE_NOTE_FAILURE = 'REMOVE_NOTE_FAILURE';

export const ADD_NOTE = 'ADD_NOTE';

export const removeNote = (id) => dispatch => {
    dispatch({ type: REMOVE_NOTE_REQUEST });
  
    axios
      .delete(`http://localhost:5000/v1/api/notes/${id}`)
      .then(() => {
        dispatch({
          type: REMOVE_NOTE_SUCCESS,
          payload: {id}
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: REMOVE_NOTE_FAILURE });
      });
  };

export const addNote = (content) => ({
    type: ADD_NOTE,
    payload: {content}
})

export const fetchNotes = () => (dispatch) => {
    dispatch({ type: FETCH_REQUEST });
  
    return axios
      .get('http://localhost:5000/v1/api/notes')
      .then(({ data }) => {
        dispatch({
          type: FETCH_SUCCESS,
          payload: {
            data,
          },
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_FAILURE });
      });
  };

