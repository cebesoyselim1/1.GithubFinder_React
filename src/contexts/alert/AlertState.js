import React, { useReducer } from "react";

import AlertReducer from "./AlertReducer";

import AlertContext from "./AlertContext";

const AlertState = (props) => {
    const initialState = {
        style: "",
        message: "",
        isActive: false
    }

    const [state,dispatch] = useReducer(AlertReducer,initialState);

    const SetAlert = (message,style) => {
        dispatch({type:"SET_ALERT",style:style,message:message})
    }

    const ClearAlert = () => {
        dispatch({type:"CLEAR_ALERT"});
    }

    return (
        <AlertContext.Provider
        value={{
            style:state.style,
            message:state.message,
            isActive: state.isActive,
            SetAlert:SetAlert,
            ClearAlert:ClearAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;