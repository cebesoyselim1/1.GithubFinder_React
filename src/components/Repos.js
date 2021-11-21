import React, { useContext, useEffect } from "react";

import GithubContext from "../contexts/github/GithubContext";

import Repo from "./Repo";

const Repos = (props) => {
    const githubContext = useContext(GithubContext);

    useEffect(() => {
        githubContext.SetRepos(props.username);
    },[])

    return (
        <ul className="list-group">
            {
                githubContext.repos.map((repo,index) => {
                    return <Repo key={index} repo={repo}/>
                })
            }
        </ul>
    )
}

export default Repos;