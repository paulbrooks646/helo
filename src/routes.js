import React from "react";
import { Switch, Route} from "react-router-dom"
import Auth from "./Components/Auth.js"
import Form from "./Components/Form/Form.js"
import Dashboard from "./Components/Dashboard/Dashboard.js"
import Post from "./Components/Post/Post.js"

export default (
<Switch>
    <Route exact path="/" component={Auth}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/post/:postid" component={Post}/>
    <Route path="/new/:userid" component={Form}/>
</Switch>
)