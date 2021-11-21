
const GithubReducer = (state,action) => {

    switch(action.type){
        case "SET_USERS":
            return {
                ...state,
                users: action.users,
                loading: false
            };
        case "CLEAR_USERS":
            return {
                ...state,
                users: []
            };
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        case "CLEAR_USER":
            return {
                ...state,
                user: {}
            };
        case "SET_REPOS":
            return {
                ...state,
                repos: action.repos
            };
        case "CLEAR_REPOS":
            return {
                ...state,
                repos: []
            };
        case "SET_LOADING":
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default GithubReducer;