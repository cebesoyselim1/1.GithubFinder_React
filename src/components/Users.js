import React from "react";

import User from "./User";
import Loading from "./Loading";

import GithubContext from "../contexts/github/GithubContext";

const Users = () => {
    const githubContext = React.useContext(GithubContext);
    return (
        <React.Fragment>
            <Loading/>
            {
            githubContext.users.length > 0 &&
            <div className="card">
                <h5 className="card-header">Users</h5>
                <div className="card-body">
                    <div className="row">
                        {
                            githubContext.users.map((user,index) => {
                                return <User key={index} user={user}/>
                            })
                            
                        }
                    </div>
                </div>
            </div>
            }
        </React.Fragment>
        
    )
}

export default Users;