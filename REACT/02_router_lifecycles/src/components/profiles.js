import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../HOC/card'
import Auth from '../HOC/auth'

const Profiles = (props) => {
  
  const redir = () => {
    
   // props.history.push('/')
  }


  return(
    <Auth>
    <Card>
      <h3>Profiles</h3>
      <Link to={{
        pathname:`${props.match.url}/posts`
        }}> take me to /profile/posts</Link>
      <br/>
      <div>Profile 1</div>
      <div>Profile 2</div>
      <div>Profile 3</div>
        {redir()}
    </Card>
    </Auth>
  )

}

export default Profiles;