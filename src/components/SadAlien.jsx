import React from 'react';
import Sad from '../assets/img/sad.jpeg';

function SadAlien() {
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
      <img src={Sad} style={size}/>
    </div>
  );
}
export default SadAlien;