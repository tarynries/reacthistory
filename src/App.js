import React, { Component } from "react";
import JokeList from "./JokeList";

/** App component. Renders list of jokes. */

class App extends Component {
  render() {
    const numJokesToGet = 5;
    return (
      <div className="App">
        <JokeList numJokesToGet={numJokesToGet} />
      </div>
    );
  }
}

export default App;
