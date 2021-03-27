import {GET_SUCCESS, GET_FAIL} from'../actions/music/types';

const initialState = {
    loading: true,
    music: null,
    error: null
};

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case GET_SUCCESS:
            return {
                ...state,
                loading: false,
                music: payload,
                error: null
            }
        case GET_FAIL:
            return {
                ...state,
                loading: false,
                music: null,
                error: payload
            };

        default:
            return state;
    }
}