import React from 'react'
import classes from '../css/styles.css'

const NewsItem = ({item}) => {


  console.log(item)
  return(
    <div className={classes.new_item}>
      <h3>{item.title}</h3>
      <div>{item.feed}</div>

    </div>

  )

} 

export default NewsItem;