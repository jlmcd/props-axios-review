import React, {Component} from 'react'
import axios from 'axios'
import MyPokes from './MyPokes'

export default class RandPoke extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemonFound: [],
      pokemonName: ''
    }
    // this.props = {
    //   myPokes: [],
    //   catchPoke: function()
    //   releasePokemon: function()
    // }
  }

  componentDidMount() {
    this.getRandomPokemon()
  }

  getRandomPokemon() {
    const randNum = Math.ceil(Math.random()*150)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randNum}/`)
      .then((results) => {
        const sprites = []
        for (let prop in results.data.sprites) {
          if (results.data.sprites[prop]) {
            sprites.push(results.data.sprites[prop])
          }
        }
        this.setState({
          pokemonFound: sprites,
          pokemonName: results.data.name
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    
    return (
      <div>
        <div>
        {this.state.pokemonFound.map((pokemon, i) => (
          <img key={i} src={pokemon} alt=""/>
        ))}
        </div>
        <button onClick={() => this.getRandomPokemon()}>Next Pokemon</button>
        <button onClick={() => this.props.catchPoke(this.state.pokemonName)}>Catch</button>
        <MyPokes
          longlistofpokemon = {this.props.myPokes}
          releasePokemon = {this.props.releasePokemon}
        />
      </div>
    )
  }
}