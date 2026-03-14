import React from 'react';
import Banner from '../components/Banner';
import BalanceCard from '../components/BalanceCard';
import Features from '../components/Features';
import { useLoaderData } from 'react-router';

const Home = () => {

    const {features, offers} = useLoaderData();
    // console.log(features)
    return (
        <div>
            <BalanceCard/>
            <Features features={features} />
            <Banner offers={offers} />
        </div>
    );
};

export default Home;