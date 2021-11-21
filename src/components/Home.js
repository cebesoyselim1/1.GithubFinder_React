import React from "react";

import Users from "./Users";
import Search from "./Search";

const Home = () => {

    return (
        <div className="container">
            <Search/>
            <Users/>
        </div>
    )
}

export default Home;