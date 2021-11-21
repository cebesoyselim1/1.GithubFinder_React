
const AlertReducer = (state,action) => {
    console.log(state);
    switch(action.type){
        case "SET_ALERT":
            return {
                style: action.style,
                message: action.message,
                isActive: true
            };
        case "CLEAR_ALERT":
            return {
                isActive: false
            };
        default:
            return state;
    }
}

export default AlertReducer;