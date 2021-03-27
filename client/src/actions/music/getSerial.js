import axios from 'axios';
import {setAlert} from '../alert';
import {GET_SUCCESS, GET_FAIL} from'./types';


// Retriev music with serial number
export const getSerial = ({serial_number}) => async dispatch => {
    try {
        const res = await axios.get(`/api/music/${serial_number}`);
        dispatch(setAlert('Music retrieved!', 'success'));
        dispatch({
            type: GET_SUCCESS,
            payload: res.data
        });
        return res;
    } catch (err) {
        // console.error(err.response.data);
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: GET_FAIL,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}


