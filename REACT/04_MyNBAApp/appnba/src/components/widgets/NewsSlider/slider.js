import React, { Component } from 'react'
import axios from 'axios';

//COMPONENTS

import SliderTemplates from './slider_templates'


class NewsSlider extends Component {
  
  state = {
    news: []
  }

  componentWillMount(){
    axios.get(`http://localhost:3001/articles?_start=${this.props.start}&_end=${this.props.amount}`).then( response => {
    this.setState(
      {news:response.data}
    )
    })
  }


  render() {

    return (
      <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings} />
    )
  }
}

export default NewsSlider;
