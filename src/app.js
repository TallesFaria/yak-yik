import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/layout/Home'

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        Yak Yik!!
        <Home />
      </div>
    );
  }
}

ReactDOM.render(< App />, document.getElementById('root'));





