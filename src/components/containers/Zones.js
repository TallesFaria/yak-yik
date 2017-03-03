import React, { Component } from 'react'
import {CreateZone, Zone} from '../presentation'
import styles from './styles'
import { APIManager } from '../../utils'

class Zones extends Component {

  constructor() {
    super()

    this.state = {
      selected: 0,
      list: []
    }
  }


  componentDidMount() {
    console.log('ComponentDidMount')
    APIManager.get('/api/zone', null, (err, response) => {
      if (err) {
        alert('ERROR' + err.message)
        return
      }

      this.setState({
        list: response.results
      })
    })
  }

  addZone(zone) {

    //let updatedZone = Object.assign({}, zone)
    zone['zipCodes'] = zone.zipCode.split(',')

    APIManager.post('/api/zone', zone, (err, response) => {
      if (err) {
        alert('ERROR' + err.message)
        return
      }

      console.log('Created zone:' + JSON.stringify(response))
      let updatedList = Object.assign([], this.state.list)
      updatedList.push(response.result)
      this.setState({
        list: updatedList
      })
    })
  }

  selectedZone(index){
    console.log('selectZone')
    this.setState({
      selected: index
    })
  }

  render() {

    const listItems = this.state.list.map((zone, i) => {
      let selected = (i==this.state.selected)
      return (
        <li key={i}> <Zone index={i} select = {this.selectedZone.bind(this)} isSelected = {selected} currentZone={zone} /> </li>
      )
    })

    return (
      <div>
        <ol>
          {listItems}
        </ol>

        <CreateZone onCreate = {this.addZone.bind(this)}/>
      </div>
    )
  }
}


export default Zones