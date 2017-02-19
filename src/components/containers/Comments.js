import React, {Component} from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'

export default class Comments extends Component {
 
  constructor(){
    super()
    this.state = {
      comment: {
        username:'',
        body:'',
        timestamp:''
      },
      list: []
    }
  }


  submitComment(event){
    let updatedList = Object.assign([],this.state.list) //copy of the state
    updatedList.push(this.state.comment)
    this.setState({
      list: updatedList
    })

  }

  updateUsername(event){
    let updatedComment = Object.assign({},this.state.comment) //copy of the state
    updatedComment['username'] = event.target.value //update the copy then set the state
    this.setState({
      comment: updatedComment
    })
  }

  updateBody(event){
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['body'] = event.target.value
    this.setState({
      comment: updatedComment
    })
    
  }

  updateTimeStamp(event){
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['timestamp'] = event.target.value
    this.setState({
      comment: updatedComment
    })
    
  }


  render(){

    const commentList = this.state.list.map((comment, i) => {
      return (<li key={i}> <Comment currentComment = {comment}/> </li>)
    })
    return(
      <div>
        <h2>Comments: Zone 1</h2>
        <div style={styles.comment.commentsBox}>
          <ul style = {styles.comment.commentsList}>  
          {commentList}
        </ul>

        <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder = "Username"/><br/>
        <input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder = "Comment"/><br/>
        <input onChange={this.updateTimeStamp.bind(this)} className="form-control" type="text" placeholder = "Time"/><br/>
        <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
        </div>
      </div>
    )
  }
}