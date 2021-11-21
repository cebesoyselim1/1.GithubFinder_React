import React from "react";

const Repo = (props) => {

    return (
        <li className="list-group-item">
            <a href={props.repo.html_url} className="list-group-link">
                {props.repo.full_name}
            </a>
        </li>
    )
}

export default Repo;