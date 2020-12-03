import React from 'react'

const NewsItem = ({item}) => {


  console.log(item)
  return(
    <div className='new_item'>
      <h3 className='new_title'>{item.title}</h3>
      <div>{item.feed}</div>

    </div>

  )

} 

export default NewsItem;