import React from 'react';


const userHOC = (WrappedComponent, arg1) => {
  return(props) => ( 
    <div>
      {arg1}
      <WrappedComponent {...props} />
    </div>
  )

}

export default userHOC;