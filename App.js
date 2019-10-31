import './App.css';
import React, { Component } from 'react';
import Register from "./components/register";
import Login from "./components/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";


class App extends Component {
  state = {  }
  render() { 
    return (<div>
     
      <Register />
     
     <Router>
          
        <Route  path='/login' component={Login} /> 
        </Router>
        
      </div>);
}
}
export default App;