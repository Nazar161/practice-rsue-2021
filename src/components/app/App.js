import React from 'react';
import './App.css';
import Header from '../Header';
import ButtonsGroup from '../Buttons';
import StudentsList from '../StudentsList';
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
                <ButtonsGroup/>
                <StudentsList/>
              </Route>
              <Route path='/:id' exact component={StudentPage}/>
            </Switch>
          </div>
      </div>
    </Router>
  );
};

export default App;
