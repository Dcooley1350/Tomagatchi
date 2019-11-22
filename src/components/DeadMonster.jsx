import React from 'react';
import DeadM from '../assets/img/dead.jpg';

function DeadMonster(){
  var size = {
    height: '200px',
    width: '200px'
  };
  var blockStyle = {
    display: 'block',
    textAlign: 'center'
  }
  return (
    <div style={blockStyle}>
      <img src={DeadM} style={size}/>
    </div>
  );
}

export default DeadMonster;