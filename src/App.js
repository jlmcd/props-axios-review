import React, { Component } from 'react';
import './App.css';
import RandPoke from './components/RandPoke'
import Header from './components/Header'

class App extends Component {
  constructor() {
    super()    
    this.state = {
      myPokes: []
    }
    this.catchPoke = this.catchPoke.bind(this)
    this.releasePokemon = this.releasePokemon.bind(this)
  }

  catchPoke(name) {
    const myPokes = [...this.state.myPokes, name]
    this.setState({
      myPokes: myPokes
    })
  }

  releasePokemon(i) {
    const myPokes = [...this.state.myPokes]
    myPokes.splice(i, 1)
    this.setState({myPokes})
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <RandPoke
          myPokes = {this.state.myPokes}
          catchPoke = {this.catchPoke}
          releasePokemon = {this.releasePokemon}
        />
      </div>
    );
  }
}

export default App;
