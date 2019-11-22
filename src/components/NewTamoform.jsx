import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
  
function NewTamoform(props) {
  let _name = null;
  let _tamo = null;
  
  function handleSubmission(event) {
    event.preventDefault();
    props.onTamoCreation({name: _name.value, tamo: _tamo.value,  id: v4()});
    _name.value = '';
    _tamo.value = '';
  }
  var tamoFormStyle ={
    marginTop: '50px'
  }
  return (
    <div style={tamoFormStyle} className="container">
      <form onSubmit={handleSubmission}>
        <input
          type='text'
          id='name'
          placeholder='name'
          ref={(input) => {_name = input;}}/>
        <select className="form-control" ref={(select) => {_tamo = select;}}>
          <option  selected> Select your Tamo...</option>
          <option value='monster'  >Monster</option>
          <option value='alien'>Alien</option>
        </select><br />
        <button className="button btn" type='submit'>create player</button>
      </form>
    </div>
  );
}
  
NewTamoform.propTypes = {
  onTamoCreation: PropTypes.func
};
  
export default NewTamoform;