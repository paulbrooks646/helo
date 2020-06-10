import React, {Component} from "react"
import {connect} from 'react-redux'
import axios from 'axios'
//import Post from '../Post/Post.js'


class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
posts: [],
search: "",
userposts: true,
filteredPosts: []
        }
        this.getPosts = this.getPosts.bind(this)
    }

    reset() {
        this.getPosts()
        this.setState({
            search: ""
        })
    }
    handleChange(val) {
        this.setState ({
            search: val
        })
    }
    filterPosts(search) {
        let posts = this.state.posts
        let filteredPosts = []

        for(let i = 0; i < posts.length; i++) {
            if (posts[i].title.includes(search)) {
                filteredPosts.push(posts[i])
            }
        }
        this.setState({posts: filteredPosts})
    }

componentDidMount() {
  this.getPosts()  
} 
getPosts() {
    if (this.state.userposts === true) {
    axios.get('/api/posts').then((res) => {
    this.setState({
        posts: res.data
    })
})}
    else {
       
    
    axios.get('/api/post/{this.props.user.id}').then((res) => {
        this.setState({
            posts: res.data
        })
    })
    }
}
userfilter() {
    if(this.state.userposts === true) {
        this.setState({userposts: false})
    } else if(this.state.userposts === false) {
        this.setState({userposts: true})
    }
    this.getPosts()
}
    

    render() {
        console.log(this.props.user.id)
        const newArray = this.state.posts.map((e, index) => <div className="postsdiv" key={index}><div className="picdiv"><h2>{e.title}</h2></div><div className="authordiv"><h6>by {e.username}</h6><img className="postspic" src={e.profile_pic} alt="profile picture"/></div></div>)
        return (
            <div className="dashboard">
                <div className="searchbar">
                    <div className="searchbarleft">
                        <input
                            value={this.state.search} 
                            className="searchinput" placeholder="Search by Title" onChange={ (e) => this.handleChange(e.target.value)}/>
                        <img onClick={ () => this.filterPosts(this.state.search)} className="searchlogo" src="https://png2.cleanpng.com/sh/8f0a835d6acad1c13d28e729546b97e5/L0KzQYm3VsE0N6p0jZH0aYP2gLBuTf1ifJZ3gdN1LXbyfsW0kBViepRtRdtsb36wRbO5UcgyQWU4UdQDNUKxQom5U8Y4PWc2TaQDOUK1RYK9UsM3PF91htk=/kisspng-material-font-search-icon-5b21819439b852.2823675615289225162364.png" alt="search logo"/>
                        <button className="resetbutton" onClick={ () => this.reset()}>Reset</button>
                    </div>
                    <div className="searchbarright">
                        <h4 className="myposts">My Posts</h4>
                        <input className="checkbox" type="checkbox" onClick={ () => this.userfilter()}
                      />
                    </div>                    
                </div>
                <div className="postdisplay"> 
                {newArray}            
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Dashboard)