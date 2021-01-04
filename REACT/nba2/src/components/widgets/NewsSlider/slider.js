import React, { Component } from 'react';
import { firebaseArticles } from '../../../firebase';
 
import SliderTemplates from './slider_templates';


class NewsSlider extends Component {

    state = {
        news:[]
    }

    componentWillMount(){
            firebaseArticles.limitToFirst(15).once('value')
            .then( (snapshot) => { 
                const news = [];
                snapshot.forEach((childSnapshot) => {
                    news.push({
                        ...childSnapshot.val(),
                        id:childSnapshot.key
                    })

                });
                this.setState({news})

            })

       /*  axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        .then( response => {
            this.setState({
                news:response.data 
            })
        }) */
    }

    render(){
        console.log(this.state);
        return(
            <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
        )
    }

}

export default NewsSlider;