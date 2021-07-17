import React, { Component } from "react";
import Navbar from './components/Navbar';
import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Provider } from 'react-redux';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Registration from './components/pages/Registration';
import SignUp from './components/pages/SignUp';
import UserHome from "./components/pages/UserHome";

import VehicleRegistration from "./components/pages/VehicleRegistration";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import './index.css';



import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
const store = createStore(reducers, compose(applyMiddleware(thunk)));


class App extends Component {
render() {
  return (
    <>
     
      <Router>
        <Navbar />
        <Switch>
        <Provider store={store}>

          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path="/UserHome" component={UserHome} />
          <Route path="/users/add" exact component={AddUser} />
          <Route path="/users/edit/:id" component={EditUser} />
          <Route path='/vehicle' component={VehicleRegistration} />
          <Route path='/registration' component={Registration} />
          <Route path='/sign-up' component={SignUp} />
        </Provider>

        </Switch>
      </Router>
    </>
  );
}
}
export default App;
