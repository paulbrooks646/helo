import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Auth from './Components/Auth/Auth';
import Nav from './Components/Nav/Nav';
import Post from './Components/Post/Post'



export default class App extends Component {
constructor() {
  super()

  this.state = {

  }
}


render() {
  return (
    <div className="App"><Nav/><Auth/><Dashboard/><Form/><Post/></div>
  )
}
};
