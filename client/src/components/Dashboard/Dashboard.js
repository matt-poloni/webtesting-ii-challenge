import React from 'react';
import ControlBtn from './ControlBtn';

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <h3>Controls</h3>
      <div className="Buttons">
        <ControlBtn
          txt="Ball"
          onClick={props.clickBall}
        />
        <ControlBtn
          txt="Strike"
          onClick={props.clickStrike}
        />
        <ControlBtn
          txt="Foul"
          onClick={props.clickFoul}
        />
        <ControlBtn
          txt="Hit"
          onClick={props.clickHit}
        />
        <ControlBtn
          txt="Out"
          onClick={props.clickOut}
        />
      </div>
    </div>
  );
}

export default Dashboard;