import AlertContext from "./alertContext";
import { useReducer } from "react";
import alertReducer from "./alertReducer";
import { RESET_ALERT, SET_ALERT } from "../actionTypes";

function AlertState(props) {
    const initialState = { alert: null };

    const [state, dispatch] = useReducer(alertReducer, initialState);

    function showAlert(type, msg) {
        dispatch({ type: SET_ALERT, payload: { type, msg } })
        setTimeout(() => dispatch({ type: RESET_ALERT }), 2000);
    }

    return (
        <AlertContext.Provider value={{
            alert: state.alert,
            showAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;