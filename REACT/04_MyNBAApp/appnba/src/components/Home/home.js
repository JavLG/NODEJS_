import React from 'react';

import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsSlider/slider';

const Home = () => {
  return(
<div>
  <NewsSlider type="featured" start={0} amount={6} settings={{dots:false}}/>
  <NewsList />
</div>

)
}


export default Home;