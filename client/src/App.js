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
    const { count } = this.state;
    if(count.balls < 3) {
      this.setState({
        count: {
          ...count,
          balls: count.balls + 1,
        }
      })
    } else {
      this.setState({
        count: {
          balls: 0,
          strikes: 0,
        }
      })
    }
  }

  clickStrike = e => {
    e.preventDefault();
    const { count } = this.state;
    if(count.strikes < 2) {
      this.setState({
        count: {
          ...count,
          strikes: count.strikes + 1,
        }
      })
    } else {
      this.setState({
        count: {
          balls: 0,
          strikes: 0,
        }
      })
    }
  }

  clickFoul = e => {
    e.preventDefault();
    const { count } = this.state;
    if(count.strikes < 2) {
      this.setState({
        count: {
          ...count,
          strikes: count.strikes + 1,
        }
      })
    }
  }

  clickHit = e => {
    e.preventDefault();
    const { count } = this.state;
    this.setState({
      count: {
        balls: 0,
        strikes: 0,
      }
    })
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
