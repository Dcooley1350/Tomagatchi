
import React from 'react';
import Happy from '../assets/img/happy.jpg';

function HappyAlien() {
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
      <img src={Happy} style={size}/>
    </div>
  );
}
export default HappyAlien;