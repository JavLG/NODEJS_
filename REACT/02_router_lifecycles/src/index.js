import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route, Link, NavLink, Switch } from 'react-router-dom';

// COMPONENTS

import Home from './components/home';
import Posts from './components/posts';
import Profiles from './components/profiles';
import PostItem from './components/post_item';
import Life from './components/lifecycles';
import Conditional from './components/conditional';
import User from './components/user';


const App = () => {
  return (
    <BrowserRouter>
    <div>
    <header> 
      <NavLink to="/" activeStyle={{color:'red'}}>MY BRAND</NavLink>
      <br/>
      <NavLink to="/conditional" activeStyle={{color:'red'}}>Conditional</NavLink>
      <br/>
      <NavLink to="/posts" activeStyle={{color:'red'}}>Posts</NavLink>
      <br/>
      <NavLink to="/life" activeStyle={{color:'red'}}>Life</NavLink>
      <br/>
      <NavLink to="/user" activeStyle={{color:'red'}}>User</NavLink>
      <br/>
      <NavLink to={{pathname:'/profile'
                }} activeStyle={{color:'red'}}> Profile </NavLink>
       <hr/>
      </header>
     
    <Switch>
    <Route path="/posts/:id/:username" component={PostItem} />
    <Route path="/posts"  exact component={Posts} />
    <Route path="/conditional" component={Conditional} />
    <Route path="/profile" component={Profiles} />
    <Route path="/life" component={Life} />
    <Route path="/user" component={User} />
    <Route path="/" exact component={Home} />
    <Route render={()=> <h3>Error 404</h3>} />
    </Switch>
    </div> 
    </BrowserRouter>
  )

}


ReactDOM.render(<App/>, document.querySelector('#root'))