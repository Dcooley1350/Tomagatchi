import React from 'react';
import Tamo from './Tamo';
import PropTypes from 'prop-types';


function TamoControl(props){
  return (
    <div>
      {props.tamolist.map((tamo) =>
        <Tamo
          name= {tamo.name}
          tamo={tamo.tamo}
          key={tamo.id}/> 
      )}
    </div>
  );
}

TamoControl.propTypes={
  tamolist: PropTypes.array
};


export default TamoControl;