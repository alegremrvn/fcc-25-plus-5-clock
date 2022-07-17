import React from 'react';
import './App.css';
import beep from './Bomb-SoundBible.com-891110113.mp3';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleBreakDecrement() {

  }

  handleBreakIncrement() {

  }

  handleSessionDecrement() {

  }

  handleSessionIncrement() {

  }

  handleStartStop() {

  }

  handleReset() {

  }

  render() {
    return (
      <div>
        <div>
          <h2 id="break-label">Break Length</h2>
          <p id="break-length"></p>
          <button id="break-decrement" onClick={this.handleBreakDecrement}>decrement</button>
          <button id="break-increment" onClick={this.handleBreakIncrement}>increment</button>
        </div>

        <div>
          <h2 id="session-label">Session Length</h2>
          <p id="session-length"></p>
          <button id="session-decrement" onClick={this.handleSessionDecrement}>decrement</button>
          <button id="session-increment" onClick={this.handleSessionIncrement}>increment</button>
        </div>

        <div>
          <h2 id="timer-label"></h2>
          <p id="time-left"></p>
          <button id="start_stop" onClick={this.handleStartStop}>start-stop</button>
          <button id="reset" onClick={this.handleReset}>reset</button>
        </div>

        <audio id="beep" src={beep}></audio>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}

export default App;
