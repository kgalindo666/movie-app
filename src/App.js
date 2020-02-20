//// REACT GANG ////
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//// components ////
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from './components/SignUp'

//// CSS SHIT ////
import "./App.css";

/////////// APP

class App extends Component {
  state = {
    currentUser: {},
    isLoggedIn: {}
  };

  doSetCurrentUser = currentUser => {
    console.log(currentUser);
    this.setState({
      currentUser,
      isLoggedIn: true
    })
  };

  render() {
    const { isLoggedIn, currentUser } = this.state;

    return (
      <div>
        <h1>APP</h1>
        <Navbar />
        <switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" render={()=><SignUp doSetCurrentUser={this.doSetCurrentUser}/>} />
        </switch>
      </div>
    );
  }
}

export default App;
