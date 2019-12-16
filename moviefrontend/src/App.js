import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
// import MovieDisplay from './components/MovieDisplay'
import './App.css'
import MovieContainer from './containers/MovieContainer'
import {Route, Redirect, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'

export class App extends Component {

  state = {
    token: localStorage.token,
    loggedInUserId: localStorage.userId,
    username: null,
    // display: 'Login'
  }

  setToken = ({ token, user_id, username })  =>{
    localStorage.token = token
    localStorage.setItem("token", token)
    localStorage.userId = user_id
    localStorage.username = username
    this.setState({
      token: token,
      loggedInUserId: user_id
    })
  }

  logOut = () => {
    localStorage.clear()
    this.setState({
      loggedInUserId: null,
      token: null
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={'/'} render={(props) => <LoginForm {...props} setToken={this.setToken}/>} />
          <Route exact path={'/movies'} render={(props) => <MovieContainer {...props} />} />
        </Switch>

        {/* <MovieContainer /> */}
      </div>
    );
  }
}

export default App;



// src="https://finalfantasyxv.square-enix-games.com//public/video/ffxv-reclaim-your-throne-bg.webm" type="video/webm">