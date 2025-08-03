import React from 'react';
import Hero from '../Hero/Hero';
import FeatureSection from '../FeatureSection/FeatureSection';
import BoostSection from '../Boost/BoostSection';
import BoostHeading from '../BoostHeading/BoostHeading';
import Comments from '../Comments/Comments';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <FeatureSection></FeatureSection>
            <BoostSection></BoostSection>
            <BoostHeading></BoostHeading>
            <Comments></Comments>
        </div>
    );
};

export default Home;