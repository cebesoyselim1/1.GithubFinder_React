import React, { useContext, useState } from "react";

import GithubContext from "../contexts/github/GithubContext";
import AlertContext from "../contexts/alert/AlertContext";

const Search = () => {
    const [keyword,SetKeyword] = useState("");

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const SearchUsers = (e) => {
        if(keyword == ""){
            alertContext.SetAlert("This place can't be empty.","danger");
        }else{
            alertContext.ClearAlert();
            githubContext.SetLoading();
            githubContext.ClearUsers();
            githubContext.SetUsers(keyword);
            SetKeyword("");
        }
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <div className="card mb-5">
                <h5 className="card-header">
                    Search
                </h5>
                <div className="card-body" onSubmit={SearchUsers}>
                    {
                        alertContext.isActive &&
                        <div className={`alert alert-${alertContext.style}`}>
                            {alertContext.message}
                        </div>
                    }
                    <form className="form">
                        <input value={keyword} onChange={(e) => SetKeyword(e.target.value)} type="text" className="form-control mb-3" />
                        <button type="submit" className="btn btn-outline-primary w-100">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Search;