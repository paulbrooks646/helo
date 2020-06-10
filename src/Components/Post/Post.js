import React, {Component} from "react"
import axios from "axios"

export default class Post extends Component {
    constructor() {
        super()

        this.state = {
        title: "",
        img: "",
        content: "",
        author: "",
        authorPicture: "",
        post: []
        }
    }
    componentDidMount() {
        this.getPost()
    }
    getPost() {
                axios.get(`/api/post/${this.props.match.params.postid}`).then((res) => {
            this.setState({
                post: res.data
            })
        })
          this.setState({
             
        })
    }

    render() {
        const newArray = this.state.post.map((e, index) => <div  className="mainpostdiv" key={index}>
        <div className="postdivbox">    
            <div className='postnavbar'>
                <div>
                    <h1 className="singleposttitle">{e.title}
                    </h1>
                </div>
                <div className="postnavbarright">
                    <h6>by {e.username}</h6>
                    <img alt="" className="postspic" src={e.profile_pic}/>
                </div>
            </div>
            <div className="postbox">
                <img className="singlepostimage" alt="" src={e.img}/>
                <h6>{e.content}</h6>
            </div>
            </div>
        </div>)
        return (
            <div>
                {newArray}
            </div>
        )
    }



}