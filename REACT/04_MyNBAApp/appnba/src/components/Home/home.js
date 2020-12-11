import React from 'react';

import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';

const Home = () => {
  return(
<div>
  <NewsSlider type="featured" start={0} amount={6} settings={{dots:false}}/>
  <NewsList
  type="card"
  loadmore={true}
  start={3}
  amount={3}
  
  />
</div>

)
}


export default Home;