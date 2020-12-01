import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';
// COMPONENTS

import Header from './components/header'
import NewsList from './components/news_list'


//


class App extends Component {
    render(){
  return (
    <div> 
      <Header />
      <NewsList />

    </div>
  )
}
  }

ReactDOM.render(<App/>,document.querySelector('#root'))