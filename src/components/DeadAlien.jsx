import React from 'react';
import Dead from '../assets/img/dead.png';

function DeadAlien(){
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
      <img src={Dead} style={size}/>
    </div>
  );
}

export default DeadAlien;