import React from 'react';
import Banner from './Banner';
import Category from './Category';
import ChefService from '../../components/ChefService/ChefService';
import PopularMenu from './PopularMenu';
import RecommendMenu from './RecommendMenu';
import FeaturedMenu from './FeaturedMenu';
import Testimonial from './Testimonial';
import { Helmet } from 'react-helmet-async';




const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Home|Bistro Boss Restaurant</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <RecommendMenu></RecommendMenu>
            <FeaturedMenu></FeaturedMenu>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;