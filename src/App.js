import React from 'react';
import './App.css';
//import Dashboard from './Components/Dashboard/Dashboard';
//import Form from './Components/Form/Form';
//import Auth from './Components/Auth/Auth';
import Nav from './Components/Nav/Nav';
//import Post from './Components/Post/Post'
import Routes from './routes.js'
//import {withRouter} from "react-router-dom"
import {connect} from "react-redux"



function App(props) {
console.log("ayayay", props)
  return (
    <div className="App"><Nav/>{Routes}</div>
  )
};

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(App)
