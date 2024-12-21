import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import AddBankAccount from './pages/AddBankAccount';
import Login from './pages/Login';
import Transaction from './pages/Transaction'; // Import the Transaction component

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/add-bank-account" component={AddBankAccount} />
                <Route path="/login" component={Login} />
                <Route path="/transaction" component={Transaction} />
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default App;