import React from "react";
import { Link } from "react-router-dom";

const User = ({user}) => {

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card">
                <img src={user.avatar_url} alt="avatar" className="card-img-top" />

                <div className="card-body">
                    <h5 className="card-title">{user.login}</h5>
                    <Link to={`/users/${user.login}`} className="btn btn-primary mt-2 w-100">Show Details</Link>
                </div>
            </div>
        </div>
    )
}

export default User;