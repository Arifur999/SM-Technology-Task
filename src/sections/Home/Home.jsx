import React from 'react';
import Hero from '../Hero/Hero';
import FeatureSection from '../FeatureSection/FeatureSection';
import BoostSection from '../Boost/BoostSection';
import BoostHeading from '../BoostHeading/BoostHeading';
import Comments from '../Comments/Comments';
import CustomerSupport from '../CustomerSupport/CustomerSupport';
import Tutorials from '../Tutorials/Tutorials';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <FeatureSection></FeatureSection>
            <BoostSection></BoostSection>
            <BoostHeading></BoostHeading>
            <Comments></Comments>
            <CustomerSupport></CustomerSupport>
            <Tutorials></Tutorials>
        </div>
    );
};

export default Home;