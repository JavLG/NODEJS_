import React from 'react';

const Movieslist = (props) => {


  const renderMovies = (movies) => (
    movies ?
    movies.map((item, i) => (<div key={i}> {item.name} </div>))
    :
    null
  )

  console.log(props)
  return (
    <div>
      {renderMovies(props.data.movies)}
    </div>
  );
};

export default Movieslist;