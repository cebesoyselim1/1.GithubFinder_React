import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import GithubState from "../contexts/github/GithubState";
import AlertState from "../contexts/alert/AlertState";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import UserDetails from "./UserDetails";
import NotFound from "./NotFound";

const App = () => {
    
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>

                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/users/:username" component={UserDetails}/>
                        <Route component={NotFound}/>
                    </Switch>
                    
                </BrowserRouter>
            </AlertState>
        </GithubState>
    )
}

export default App;