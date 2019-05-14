import React from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard/Dashboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: {
        balls: 0,
        strikes: 0,
      }
    }
  }

  clickBall = e => {
    e.preventDefault();
  }

  clickStrike = e => {
    e.preventDefault();
  }

  clickFoul = e => {
    e.preventDefault();
  }

  clickHit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h2>Current At Bat</h2>
        <Display count={this.state.count} />
        <Dashboard
          clickBall={this.clickBall}
          clickStrike={this.clickStrike}
          clickFoul={this.clickFoul}
          clickHit={this.clickHit}
        />
      </div>
    );
  }
}

export default App;
