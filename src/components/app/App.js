import React from 'react';
import './App.css';
import Header from '../Header';
import MainPage from '../pages/MainPage';
import StudentPage from '../pages/StudentPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
          <Header/>
          <div className="page">
            <Switch>
              <Route path='/' exact>
                  <MainPage/>
              </Route>
              <Route path='/:id' exact>
                <StudentPage/>
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
};

export default App;
