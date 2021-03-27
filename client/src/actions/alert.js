import {v4 as uuid} from "uuid";
import {SET_ALERT, REMOVE_ALERT} from'./types';

// this syntax is possible thanks to the 'func' middleware 
// dispatch more than one action types in this function
export const setAlert = (msg, alertType, timeout=5000) => dispatch => {
        // get a universal id in the format of a long string
        const id = uuid();
        dispatch(
            {
                type: SET_ALERT,
                payload: {msg, alertType, id}
            }
        );
        setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), timeout);
};