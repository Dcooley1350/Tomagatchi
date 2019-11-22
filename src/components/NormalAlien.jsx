import React from 'react';
import Grumpy from '../assets/img/grumpy.png';

function GrumpyAlien() {
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
      <img src={Grumpy} style={size}/>
    </div>
  );
}
export default GrumpyAlien;