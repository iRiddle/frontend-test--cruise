import React, { Component } from "react";

import { Scrollbars } from "react-custom-scrollbars";

import Header from "./components/Header";
import SecondaryHeader from "./components/SecondaryHeader";
import LeftBar from "./components/LeftBar";

import Tables from "./containers/Tables";

import "./style.css";

import {
  seatsVIP,
  seatsStandart,
  seatsAnything
} from "../src/core/mocksApi.json";

class App extends Component {
  state = {
    links: [
      {
        id: "overview",
        title: "overview"
      },
      {
        id: "tables",
        title: "tables"
      },
      {
        id: "guests",
        title: "guests"
      },
      {
        id: "delivery",
        title: "delivery"
      }
    ],
    top: 0,
    dates: [
      { id: 1, title: "April, 10" },
      { id: 2, title: "April, 11" },
      { id: 3, title: "April, 12" },
      { id: 4, title: "April, 13" },
      { id: 5, title: "April, 14" },
      { id: 6, title: "April, 15" },
      { id: 7, title: "April, 16" },
      { id: 8, title: "April, 17" },
      { id: 9, title: "April, 18" },
      { id: 10, title: "April, 19" },
      { id: 11, title: "April, 20" },
      { id: 12, title: "April, 21" },
      { id: 13, title: "April, 22" },
      { id: 14, title: "April, 23" },
      { id: 15, title: "April, 24" }
    ],
    seats: [
      { id: "seatsVIP", title: "2 seats, VIP" },
      { id: "seatsStandart", title: "3 seats, standart" },
      { id: "seatsAnything", title: "2 seats, VIP" }
    ]
  };

  renderThumb = ({ style, ...props }) => {
    const { top } = this.state;
    const thumbStyle = {
      backgroundColor: `rgb(${Math.round(255 - top * 255)}, ${Math.round(
        255 - top * 255
      )}, ${Math.round(255 - top * 255)})`
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  render() {
    const { links, dates, seats } = this.state;
    return (
      <div className="App">
        <Header links={links} />
        <Scrollbars
          style={{ width: "100vw", height: "92vh" }}
          renderThumbHorizontal={this.renderThumb}
          renderThumbVertical={this.renderThumb}
        >
          <SecondaryHeader dates={dates} />

          <div className="app__left-side">
            <div>
              <LeftBar seats={seats} />
            </div>
            <div>
              <Tables seats={seatsVIP} />
              <Tables seats={seatsStandart} />
              <Tables seats={seatsAnything} />
            </div>
          </div>
        </Scrollbars>
      </div>
    );
  }
}

export default App;
