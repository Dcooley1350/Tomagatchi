import React from 'react';
import SadM from '../assets/img/sadmonster.png';

function SadMonster(){
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
      <img src={SadM} style={size}/>
    </div>
  );
}

export default SadMonster;