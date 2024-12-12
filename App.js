// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin';
import User from './components/User';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/user" component={User} />
                <Route path="/" component={Login} />
            </Switch>
        </Router>
    );
}

export default App;
