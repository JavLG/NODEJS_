import React from 'react';

const Conditional = () => {
  
    const value = true;

    const returnValue = () => {
      return value;
    }
    const showIt = () => {
      return (
        returnValue() ?
      <div>Hello, its True</div>
      : 
      <div>Hello, its False</div>
      
      )
    }
    
  return (

    <div>
    {showIt()}
    </div>

  )

}

export default Conditional;