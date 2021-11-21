import React, { useReducer } from "react";

import GithubReducer from "./GithubReducer";

import GithubContext from "./GithubContext";

import GithubService from "../../services/GithubService";

const GithhubState = (props) => {
    const githubService = new GithubService();

    const initalState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state,dispatch] = useReducer(GithubReducer,initalState);

    const SetUsers = (username) => {
        githubService.GetUsers(username)
            .then((users) => {
                dispatch({type:"SET_USERS",users:users.data.items});
            })
    }

    const ClearUsers = () => {
        dispatch({type:"CLEAR_USERS"});
    }

    const SetUser = (username) => {
        githubService.GetUser(username)
            .then((user) => {
                console.log(user);
                dispatch({type:"SET_USER",user:user.data});
            })
    }

    const SetRepos = (username) => {
        console.log(username);
        githubService.GetRepos(username)
            .then((repos) => {
                dispatch({type:"SET_REPOS",repos:repos.data});
            })
    }

    const SetLoading = () => {
        dispatch({type:"SET_LOADING"});
    }
 
    return (
        <GithubContext.Provider
        value={{
            users:state.users,
            user:state.user,
            repos:state.repos,
            loading:state.loading,
            SetUsers:SetUsers,
            ClearUsers:ClearUsers,
            SetUser:SetUser,
            SetRepos:SetRepos,
            SetLoading:SetLoading
        }}>
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithhubState;