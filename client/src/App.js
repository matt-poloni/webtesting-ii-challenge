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
    if(inning.balls < 3) {
      this.setState({
        inning: {
          ...inning,
          balls: inning.balls + 1,
        }
      })
    } else {
      this.setState({
        inning: {
          ...inning,
          balls: 0,
          strikes: 0,
        }
      })
    }
  }

  clickStrike = e => {
    e.preventDefault();
    const { inning } = this.state;
    if(inning.strikes < 2) {
      this.setState({
        inning: {
          ...inning,
          strikes: inning.strikes + 1,
        }
      })
    } else {
      this.setState({
        inning: {
          ...inning,
          balls: 0,
          strikes: 0,
        }
      })
    }
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
      }
    })
  }

  clickOut = e => {
    e.preventDefault();
    const { inning } = this.state;
    if(inning.outs < 2) {
      this.setState({
        inning: {
          ...inning,
          outs: inning.outs + 1,
        }
      })
    } else {
      this.setState({
        inning: {
          balls: 0,
          strikes: 0,
          outs: 0,
        }
      })
    }
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
