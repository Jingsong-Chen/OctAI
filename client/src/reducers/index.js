import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import music from './getSerial';

// Don't forget to register states in reducers here!
export default combineReducers ({
    alert,
    auth,
    music
});
