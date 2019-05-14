import React from 'react';

function Display(props) {
  if(!props.count) {
    return (<div>Error: Cannot display the count</div>)
  }
  const { balls, strikes } = props.count;
  const text = `${balls} ball${balls !== 1 ? 's' : ''} and ${strikes} strike${strikes !== 1 ? 's' : ''}`;
  return (
    <div className="Display">
      <h3>Count</h3>
      <p>{text}</p>
    </div>
  );
}

export default Display;
