import React, {Component} from 'react'

export default class CreateZone extends Component{
  
  constructor(){
    super()
    this.state = {
      zone: {
        name: '',
        zipCode: '',
      }
    }
  }

  updateZone(event){
    console.log('updateComment' + event.target.id + ' == ' + event.target.value )
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[event.target.id] = event.target.value
    this.setState({
      zone: updatedZone
    })
  }

  submitZone(event) {
    console.log('submitComment' + JSON.stringify(this.state.zone))
    this.props.onCreate(this.state.zone)
  }

  render(){
    return(
      <div>
        <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name" /><br />
        <input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="ZipCode" /><br />
        <button onClick={this.submitZone.bind(this)} className="btn btn-danger">Add Zone</button>
      </div>
    )
  }
}