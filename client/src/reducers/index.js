import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import music from './getSerial';

export default combineReducers ({
    alert,
    auth,
    music
});
