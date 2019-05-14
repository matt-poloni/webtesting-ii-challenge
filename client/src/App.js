import React from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard/Dashboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inning: {
        balls: 0,
        strikes: 0,
        outs: 0,
      },
    }
  }

  clickBall = e => {
    e.preventDefault();
    const { inning } = this.state;
    this.setState({
      inning: {
        ...inning,
        balls: inning.balls < 3
          ? inning.balls + 1
          : 0,
        strikes: inning.balls < 3
          ? inning.strikes
          : 0,
      }
    })
  }

  clickStrike = e => {
    e.preventDefault();
    const { inning } = this.state;
    this.setState({
      inning: {
        balls: inning.strikes < 2
          ? inning.balls
          : 0,
        strikes: inning.strikes < 2
          ? inning.strikes + 1
          : 0,
        outs: inning.strikes < 2
          ? inning.outs
          : inning.outs < 2
            ? inning.outs + 1
            : 0,
      }
    })
  }

  clickFoul = e => {
    e.preventDefault();
    const { inning } = this.state;
    if(inning.strikes < 2) {
      this.setState({
        inning: {
          ...inning,
          strikes: inning.strikes + 1,
        }
      })
    }
  }

  clickHit = e => {
    e.preventDefault();
    const { inning } = this.state;
    this.setState({
      inning: {
        ...inning,
        balls: 0,
        strikes: 0,
        outs: inning.outs,
      }
    })
  }

  clickOut = e => {
    e.preventDefault();
    const { inning } = this.state;
    this.setState({
      inning: {
        balls: 0,
        strikes: 0,
        outs: inning.outs < 2
          ? inning.outs + 1
          : 0,
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Current At Bat</h2>
        <Display inning={this.state.inning} />
        <Dashboard
          clickBall={this.clickBall}
          clickStrike={this.clickStrike}
          clickFoul={this.clickFoul}
          clickHit={this.clickHit}
          clickOut={this.clickOut}
        />
      </div>
    );
  }
}

export default App;
