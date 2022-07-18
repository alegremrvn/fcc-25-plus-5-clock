import React from 'react';
import './App.css';
import beep from './Bomb-SoundBible.com-891110113.mp3';

let interval;

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerLabel: 'Session',
      timeLeftInSeconds: 25 * 60,
      status: 'initial'
    };
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleBreakDecrement() {
    if (this.state.status === 'initial' &&
    this.state.breakLength > 1) {
      this.setState({
        breakLength: this.state.breakLength - 1
      })
    } 
  }

  handleBreakIncrement() {
    if (this.state.status === 'initial' &&
    this.state.breakLength < 60) {
      this.setState({
        breakLength: this.state.breakLength + 1
      })
    }
  }

  handleSessionDecrement() {
    if (this.state.status === 'initial' &&
    this.state.sessionLength > 1) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timeLeftInSeconds: (this.state.sessionLength - 1) * 60
      })
    }
  }

  handleSessionIncrement() {
    if (this.state.status === 'initial' &&
    this.state.sessionLength < 60) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timeLeftInSeconds: (this.state.sessionLength + 1) * 60
      })
    }
  }

  handleStartStop() {
    if (this.state.status === 'initial') {
      interval = setInterval(() => {
        this.setState({
          timeLeftInSeconds: this.state.timeLeftInSeconds - 1
        })
      }, 1000);
      this.setState({
        status: 'running'
      });
    }
  }

  handleReset() {
    document.getElementById('beep').pause();
    clearInterval(interval);
    interval = undefined;
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timerLabel: 'Session',
      timeLeftInSeconds: 25 * 60,
      status: 'initial'
    });
  }

  render() {
    let secondsToMMSS = (seconds) => {
      let result = '';

      let mm = String(Math.floor(seconds / 60));
      if (mm.length === 2) {
        result += mm + ':';
      } else if (mm.length === 1) {
        result += '0' + mm + ':';
      }

      let ss = String(seconds % 60);
      if (ss.length === 2) {
        result += ss;
      } else if (ss.length === 1) {
        result += '0' + ss;
      }

      return result;
    }

    let timeLeft = secondsToMMSS(this.state.timeLeftInSeconds);

    return (
      <div>
        <div>
          <h2 id="break-label">Break Length</h2>
          <p id="break-length"></p>
          <button id="break-decrement" onClick={this.handleBreakDecrement}>
            decrement</button>
          <button id="break-increment" onClick={this.handleBreakIncrement}>
            increment</button>
        </div>

        <div>
          <h2 id="session-label">Session Length</h2>
          <p id="session-length"></p>
          <button id="session-decrement" onClick={this.handleSessionDecrement}>
            decrement</button>
          <button id="session-increment" onClick={this.handleSessionIncrement}>
            increment</button>
        </div>

        <div>
          <h2 id="timer-label">{this.state.timerLabel}</h2>
          <p id="time-left">{timeLeft}</p>
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
