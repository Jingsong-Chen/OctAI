import axios from 'axios';
import {setAlert} from '../actions/alert';
import {REGISTER_SUCCESS, REGISTER_FAIL} from '../actions/types';

// Register User
export const register = ({name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({name, email, password});
    try {
        // send registration data to backend and get response
        const res = await axios.post('/api/users', body, config);
        dispatch(setAlert('User registered!', 'success'))
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL
        });
    }
}
