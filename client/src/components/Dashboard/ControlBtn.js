import React from 'react';

function ControlBtn(props) {
  return (
    <div className="ControlBtn">
      <button
        onClick={props.onClick}
      >
        {props.txt}
      </button>
    </div>
  );
}

export default ControlBtn;
