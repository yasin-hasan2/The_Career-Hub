// import React from 'react';

import Banner from "../banner/Banner";
import CategoryList from "../categorylist/CategoryList";
import FeaturedJobs from "../featuredJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h1>this is home </h1>
      <CategoryList></CategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
