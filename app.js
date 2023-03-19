import React from "react";
import "../styles/App.css";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    NavLink,
    Link,
} from "react-router-dom";
import Info from "./Info";
import Blog from "./Blog";
import Home from "./Home";
const App = () => {
    return (
        <div id="main">
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <route path="/blog" exact>
                        <Blog />
                    </route>
                    <route path="/info" exact>
                        <Info />
                    </route>
                </Switch>
            </Router>
        </div>
    );
};
