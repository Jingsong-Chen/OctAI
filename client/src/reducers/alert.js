import {SET_ALERT, REMOVE_ALERT} from '../actions/types'; 
const initialState = [];

// the reducer is kinda like a state machine
export default function(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case SET_ALERT:
            // append new alert at the end of alert array
            return [...state, payload]
        
        case REMOVE_ALERT:
            // remove alerts whose id is the target id
            return state.filter(alert => alert.id !== payload);

        default:
            // don't do anything for invalid action types
            return state;
    }
}
// {
//     id: 1,
//     msg: 'Please log in',
//     alertType: 'success',
// }