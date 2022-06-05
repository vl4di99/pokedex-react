import React, { Component } from "react";
import "./Pokedex.css";
import axios from "axios";
import Pokecard from "./Pokecard";

const offset_api = 0;
const limit_api = 20;
const Pokemons_API = `${process.env.REACT_APP_POKE_API}pokemon?offset${offset_api}&limit=${limit_api}`;

export default class Pokedex extends Component {
  state = {
    Pokemons: [],
  };

  componentDidMount() {
    axios.get(Pokemons_API).then((response) => {
      const Pokemons = response.data.results;
      this.setState({ Pokemons });
    });
  }

  render() {
    return (
      <div className="Pokedex">
        <div className="Pokedex__title">
          <h1 className="Pokedex__title__h1">Welcome to the new Pokedex!</h1>
        </div>
        <div className="Pokedex__cards">
          {this.state.Pokemons.map((poke, index) => (
            <Pokecard name={poke.name} url={poke.url} number={index + 1} />
          ))}
        </div>
      </div>
    );
  }
}
