import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Container} from "./Components/Container";
import {NavBar} from "./Components/NavBar";

function App() {
    return (
        <>
            <NavBar />
            <Container />
        </>
    );
}

export default App;
