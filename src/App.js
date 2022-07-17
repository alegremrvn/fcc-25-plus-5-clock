import React from 'react';
import './App.css';
import beep from './Bomb-SoundBible.com-891110113.mp3';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div>
          <h2 id="break-label">Break Length</h2>
          <p id="break-length"></p>
          <button id="break-decrement">decrement</button>
          <button id="break-increment">increment</button>
        </div>

        <div>
          <h2 id="session-label">Session Length</h2>
          <p id="session-length"></p>
          <button id="session-decrement">decrement</button>
          <button id="session-increment">increment</button>
        </div>

        <div>
          <h2 id="timer-label"></h2>
          <p id="time-left"></p>
          <button id="start_stop">start-stop</button>
          <button id="reset">reset</button>
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
