import React, { Component } from "react";
import CardInfoModal from "./CardInfoModal";
import "./Pokecard.css";

const POKE_IMAGE = process.env.REACT_APP_POKE_API_IMAGE_FULL;

class Pokecard extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    //let imgSrc_PNG = `${POKE_IMAGE}${this.props.number}.png`;
    let imgSrc = `${POKE_IMAGE}${this.props.number}.svg`;
    return (
      <div>
        <div className="Pokecard">
          <h1 className="Pokecard__title">
            {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
          </h1>
          <img
            src={imgSrc}
            alt={this.props.name}
            className="Pokecard__image"
            onClick={this.openModal}
          />
          <div className="Pokecard__data">
            <div className="Pokecard__data__infobutton">Get Info</div>
          </div>
        </div>
        {this.state.modalOpen && (
          <CardInfoModal url={this.props.url} modalClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default Pokecard;
