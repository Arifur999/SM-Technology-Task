import React from 'react';
import Hero from '../Hero/Hero';
import FeatureSection from '../FeatureSection/FeatureSection';
import BoostSection from '../Boost/BoostSection';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <FeatureSection></FeatureSection>
            <BoostSection></BoostSection>
        </div>
    );
};

export default Home;