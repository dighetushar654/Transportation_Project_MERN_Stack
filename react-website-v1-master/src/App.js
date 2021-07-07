import React, { Component } from "react";
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Registration from './components/pages/Registration';
import SignUp from './components/pages/SignUp';
import VehicleRegistration from "./components/pages/VehicleRegistration";

class App extends Component {
render() {
  return (
    <>
     
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/vehicle' component={VehicleRegistration} />
          <Route path='/registration' component={Registration} />
          <Route path='/signup' component={SignUp} />

        </Switch>
      </Router>
    </>
  );
}
}
export default App;
