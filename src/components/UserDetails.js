import React, { useContext, useEffect } from "react";

import Repos from "./Repos";

import GithubContext from "../contexts/github/GithubContext";

const UserDetails = (props) => {
    const githubContext = useContext(GithubContext);

    useEffect(() => {
        githubContext.SetUser(props.match.params.username);
    },[])

    return (
        <div className="container">
            <div className="row">

                <div className="col-md-4">
                    <div className="card">
                        <img src={githubContext.user.avatar_url} alt="avatar" className="card-img-top" />
                        <div className="card-body">
                            <div className="card-text mb-2">
                                <i className="fas fa-user p-1"></i> {githubContext.user.name}
                            </div>
                            <div className="card-text ">
                            <i className="fas fa-map-marker-alt p-1"></i> {githubContext.user.location}
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card">
                        <h2 className="card-header text-center">
                            {githubContext.user.login}
                        </h2>
                        <div className="card-body">
                            <a href={githubContext.user.blog} className="card-text">
                                <i className="fab fa-html5 p-1"></i> 
                                {githubContext.user.blog}
                            </a>
                            <div className="card-text mt-2">
                                <div className="badge bg-success m-2">
                                    {githubContext.user.followers} followers
                                </div>
                                <div className="badge bg-danger m-2">
                                    {githubContext.user.following} following
                                </div>
                                <div className="badge bg-primary m-2">
                                    {githubContext.user.public_repos} repos
                                </div>
                            </div>
                            <h5 className="card-title mt-4">Repos</h5>
                            <div className="card-text">
                                <Repos username={props.match.params.username}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;