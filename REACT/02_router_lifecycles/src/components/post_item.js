import React from 'react';

const PostItem = (props) => {
  console.log(props)
  return (

    <div>
      Post Details!
      <br/>
      {props.match.params.id}
      <br/>
      {props.match.params.username}
    </div>

  )

}

export default PostItem;