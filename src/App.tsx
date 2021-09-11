import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Container} from "./Components/Container";
import {NavBar} from "./Components/NavBar";

function App() {
    return (
        <>
            <div className="bg-stars">
                <img src="/images/stars.png" alt=""/>
            </div>
            <NavBar/>
            <Router>
                <Switch>
                    <Route path="/" component={Container} exact/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
