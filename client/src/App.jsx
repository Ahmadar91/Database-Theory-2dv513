import React from 'react';
import './App.css';
import Screen from './screens/Screen'

export default class App extends React.Component {

  state;

  constructor(props){
    super(props)
    this.state= {
      page:1
    }
    this.changePage = this.changePage.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Navbar changePage={()=>this.changePage}></Navbar>
        <Screen page={this.state.page}></Screen>
      </div>
    );
  }

  changePage(pagenr){
    this.setState({
      page:pagenr
    })
  }

}

class Navbar extends React.Component {

  render() {
    return (
      <div className="Navbar">
        <button onClick={this.props.changePage(1)}>
          Home
          </button>
        <button onClick={this.props.changePage(2)}>
          Profile
          </button>
        <button onClick={this.props.changePage(3)}>
          Login
          </button>
      </div>
    )
  }
}
