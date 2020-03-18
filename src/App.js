// create your App component here
import React from 'react';

const API = "http://api.open-notify.org/astros.json"

class App extends React.Component{
  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(astros => console.log(astros))
      .catch(err => console.log(err))
  }
  render(){
    return(
      <h1>yolo</h1>
    )
  }
}

export default App;
