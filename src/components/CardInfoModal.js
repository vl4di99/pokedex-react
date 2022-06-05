import React, { Component } from "react";
import "./CardInfoModal.css";

export default class CardInfoModal extends Component {
  render() {
    return (
      <div className="cardInfoModal">
        <h2>I AM MODAL</h2>
        <button onClick={this.props.open(false)}>Close</button>
      </div>
    );
  }
}
