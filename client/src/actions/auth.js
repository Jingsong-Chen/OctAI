import axios from 'axios';
import {setAlert} from '../actions/alert';
import {
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    USER_LOADED, 
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../actions/types';
import setAuthToken from '../utils/setAuthToken';

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

// Load user
export const loadUser = () => async dispatch => {
    // if the authentication token is stored, set it in the header
    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
}

// Login User
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({email, password});
    try {
        // send login data to backend and get response
        const res = await axios.post('/api/auth', body, config);
        dispatch(setAlert('User logged in!', 'success'))
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_FAIL
        });
    }
}

// Logout / Clear Profile
export const logout = () => dispatch => {
    dispatch({type: LOGOUT});
}