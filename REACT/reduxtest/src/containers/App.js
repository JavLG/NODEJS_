
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { moviesList, directorsList } from '../actions';
import { bindActionCreators } from 'redux';
import MoviesList from '../components/moviesList';


class App extends Component {

  componentWillMount(){
    this.props.moviesList();
    this.props.directorsList();
  }

  renderMovies = (movies) => (
    movies ?
    movies.map(item => (<div> {item.name} </div>))
    :
    null
  )



  render() {
    console.log(this.props)
    return (
      <div>
        <MoviesList {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({moviesList, directorsList},dispatch)
    
  }




export default connect(mapStateToProps,mapDispatchToProps)(App);