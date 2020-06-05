import React, {Component} from 'react';
import './App.css';
//import Dashboard from './Components/Dashboard/Dashboard';
//import Form from './Components/Form/Form';
//import Auth from './Components/Auth/Auth';
import Nav from './Components/Nav/Nav';
//import Post from './Components/Post/Post'
import Routes from './routes.js'
import {withRouter} from "react-router-dom"



class App extends Component {
constructor() {
  super()

  this.state = {

  }
}


render() {
  return (
    <div className="App"><Nav location={this.props.location.pathname} />{Routes}</div>
  )
}
};

export default withRouter(App)
