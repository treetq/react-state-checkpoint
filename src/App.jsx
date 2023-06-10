import React, { Component, useState } from "react";
import imgProfile from "./assets/tarek.jpg";
import "./App.css";

class App extends Component {
  state = {
    person: {
      fullName: "Tarek Khireddine",
      bio: "junior mern stack",
      imgSrc: imgProfile,
      profession: "Engineer",
    },
    show: false,
    lastMountTime: null,
    recentMountTime: null,
  };

  toggleToShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  componentDidMount() {
    const currentTime = new Date();
    this.setState((prevState) => ({
      lastMountTime: prevState.recentMountTime,
      recentMountTime: currentTime,
    }));
  }

  getTimeSinceLastMount = () => {
    const { lastMountTime, recentMountTime } = this.state;
    if (!lastMountTime || !recentMountTime) {
      return null;
    }
    const timeDiff = recentMountTime - lastMountTime;
    return timeDiff;
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show } = this.state;

    return (
      <>
        <div className="navbar">
          <button onClick={this.toggleToShow}>show me</button>
        </div>

        <div className="app">
          {show && (
            <div className="main">
              <h2>{fullName}</h2>
              <span>{bio}</span>
              <img src={imgSrc} alt="Profile" />
              <span>{profession}</span>
            </div>
          )}
          {this.state.recentMountTime && (
            <p>
              Time interval since last mount: {this.getTimeSinceLastMount()}{" "}
              milliseconds
            </p>
          )}
        </div>
      </>
    );
  }
}

export default App;
