import React, {Component} from "react"
import axios from "axios"

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
        title: "",
        img: "",
        content: ""
        }
    }
changeTitle(val) {
    this.setState({title: val})
}
changeImage(val) {
    this.setState({img: val})
}
changeContent(val) {
    this.setState({content: val})
}
addPost(title, img, content) {
    const body = {title, img, content}
    axios.post(`/api/${this.props.match.params.userid}`, body)
}


    render() {
        return (
            <div  className="newpostmain">
                <div className="newpostdiv">
                    <h1 className="newposttitle">New Post</h1>
                    <h6 className="titlelabel">Title:</h6>
                    <input className="titleinput" value={this.state.title} onChange={e => this.changeTitle(e.target.value)}/>
                    <div className="imgslot">
                        <img src={this.state.img} alt=""/>
                    </div>    
                    <h6 className="imglabel">Image URL:</h6>
                    <input className="imginput" value={this.state.img} onChange={e => this.changeImage(e.target.value)}/>
                    <h6 className="contentlabel">Content:</h6>
                    <input className="contentinput" value={this.state.content} onChange={e => this.changeContent(e.target.value)}/>
                    <button className="lastbutton" onClick={() =>{ this.addPost(this.state.title, this.state.img, this.state.content)
                    this.setState({title: "", img: "", content: ""})}}>Post</button>
                </div>
            </div>
        )
    }



}