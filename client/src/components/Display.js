import React from 'react';

function Display(props) {
  const { balls, strikes } = props.count || [0, 0];
  const count = `${balls} balls and ${strikes} strikes`;

  return (
    <div className="Display">
      <h3>Count</h3>
      <p>{count}</p>
    </div>
  );
}

export default Display;
