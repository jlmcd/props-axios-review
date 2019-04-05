import React, {Component} from 'react'

export default class MyPokes extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    // this.props = {
    //   longlistofpokemon: []
    //   releasePokemon: function
    // }
  }
  render() {
    return (
      <div className='my-pokemon'>
        <h1>My Pokemon:</h1>
        <h5>(click to release!)</h5>
        {this.props.longlistofpokemon.map((pokemon, i) => (
          <h3 onClick={() => this.props.releasePokemon(i)} key={i}>{pokemon}</h3>
        ))}
      </div>
    )
  }
}