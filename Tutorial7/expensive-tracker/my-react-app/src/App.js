import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { useAuth } from './components/AuthContext';

const App = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <h1>Expense Tracker</h1>
      {!currentUser ? (
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />
        </Switch>
      ) : (
        <div>
          <ExpenseForm />
          <ExpenseList />
          <Logout />
        </div>
      )}
    </div>
  );
};

export default App;
