import { RESET_ALERT, SET_ALERT } from "../actionTypes";

export default function alertReducer(state, action) {
    switch (action.type) {
        case SET_ALERT:
            return {
                ...state,
                alert: action.payload
            };
            
        case RESET_ALERT:
            return {
                ...state,
                alert: null
            }
    
        default:
            return state;
    }
}