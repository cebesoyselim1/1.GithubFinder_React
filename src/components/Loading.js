import React, { useContext } from "react";

import GithubContext from "../contexts/github/GithubContext";

const Loading = () => {
    const githubContext = useContext(GithubContext);

    return (
        <React.Fragment>
            {
                githubContext.loading  == true &&
                <div className="container my-4">
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border loader" role="status"></div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default Loading;