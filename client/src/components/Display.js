import React from 'react';

function Display(props) {
  if(!props.inning) {
    return (<div>Error: Cannot display the current game state</div>)
  }
  const { balls, strikes, outs } = props.inning;
  const countTxt = `The count is ${balls} ball${balls !== 1 ? 's' : ''} and ${strikes} strike${strikes !== 1 ? 's' : ''}`;
  const outsTxt = `There ${outs !== 1 ? 'are' : 'is'} ${outs} out${outs !== 1 ? 's' : ''}`;
  return (
    <div className="Display">
      <h3>Inning</h3>
      <p>{countTxt}</p>
      <p>{outsTxt}</p>
    </div>
  );
}

export default Display;
