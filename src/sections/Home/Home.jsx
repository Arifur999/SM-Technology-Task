import React from 'react';
import Hero from '../Hero/Hero';
import FeatureSection from '../FeatureSection/FeatureSection';
import BoostSection from '../Boost/BoostSection';
import BoostHeading from '../BoostHeading/BoostHeading';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <FeatureSection></FeatureSection>
            <BoostSection></BoostSection>
            <BoostHeading></BoostHeading>
        </div>
    );
};

export default Home;