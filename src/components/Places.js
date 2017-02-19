import _ from 'lodash';
import React from 'react';

export default class Places extends React.Component {
  
  render() {    
    const list = this.props.venues.map((venue,i) =>  {
      return(
        <li key={i}>{venue.name}</li>
      )
    })  
  
    
    return (
      <div>
          Venues
          <ol>
            {list}
          </ol>
      </div>   
    );
  }
}