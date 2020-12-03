import React from 'react';


//HOCs

import userHOC from '../HOC/userHOC';


const User = (props) => {
  console.log(props)
return(

  <div>
    User 1
  </div>
)

}

export default userHOC(User,'Hello!');