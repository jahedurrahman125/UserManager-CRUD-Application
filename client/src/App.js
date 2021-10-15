import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import User from './components/Users';
import Add from './components/Add';
import AppBar from './components/AppBar';
import EditUser from './components/EditUsers';

function App() {
    return(
        <BrowserRouter>
            <AppBar />
            <Switch>
                <Route exact path="/" component={User} />
                <Route exact path="/add" component={Add} />
                <Route exact path="/edit/:id" component={EditUser} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;