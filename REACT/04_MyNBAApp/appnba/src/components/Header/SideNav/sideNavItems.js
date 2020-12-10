import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

// CSS SideNav
import style from './sideNav.css';



const SideNavItems = () => {

  const items = [
    {
      type: style.option,
      icon: 'home',
      text: 'Home',
      link: '/'
    },
    {
      type: style.option,
      icon: 'file-alt',
      text: 'News',
      link: '/news'
    },
    {
      type: style.option,
      icon: 'play',
      text: 'Videos',
      link: '/videos'
    },
    {
      type: style.option,
      icon: 'sign-in-alt',
      text: 'Sign In',
      link: '/sign-in'
    },
    {
      type: style.option,
      icon: 'sign-out-alt',
      text: 'Sign Out',
      link: '/sign-out'
    }

  ]

  const showItems = () => {
    return items.map( (item, i) => {
      return(
        <div key={i} className={item.type}>
      <Link to={item.link}>
        <FontAwesome name={item.icon}/> {item.text} 
      </Link>
</div>
      )
    })
  }

  return (
    <div>{showItems()}</div>
  );
};

export default SideNavItems;