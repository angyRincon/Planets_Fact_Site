import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Container} from "./Components/Container";
import {NavBar} from "./Components/NavBar";

function App() {

    useEffect(() => {
        if (window.location.pathname === "/") window.location.href = "planet/earth"
    }, [])

    return (
        <>
            <Router>
                <NavBar/>
                <Switch>
                    <Route path="/planet/:planet" component={Container}/>
                    <Route path="/" component={Container} exact/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
