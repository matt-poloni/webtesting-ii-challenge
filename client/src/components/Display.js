import React from 'react';

function Display(props) {
  if(!props.count) {
    return (<div>Error: Cannot display the count</div>)
  }
  const { balls, strikes } = props.count;
  const text = `${balls} balls and ${strikes} strikes`;
  return (
    <div className="Display">
      <h3>Count</h3>
      <p>{text}</p>
    </div>
  );
}

export default Display;
