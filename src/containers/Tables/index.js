import React, { Component } from "react";
import PropTypes from "prop-types";

import Card from "../../components/Card";

import "./style.css";

export default class Tables extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { seats } = this.props;
    return (
      <div className="tables">
        {seats.map(seat => (
          <Card key={seat.id} load={seat.load} bookingTime={seat.bookingTime} />
        ))}
      </div>
    );
  }
}
