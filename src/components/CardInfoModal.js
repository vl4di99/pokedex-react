import axios from "axios";
import React, { Component } from "react";
import "./CardInfoModal.css";

export default class CardInfoModal extends Component {
  state = {
    Information: {},
  };
  componentDidMount() {
    axios.get(this.props.url).then((response) => {
      this.setState({ Information: response });
    });
  }
  render() {
    return (
      <div className="cardInfoModal">
        <h2>I AM MODAL</h2>
        <button onClick={this.props.modalClose}>Close</button>
        <h3>Final</h3>
      </div>
    );
  }
}
