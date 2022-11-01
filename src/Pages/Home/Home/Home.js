import React from 'react';
import Services from '../Services/Services';
import repair1 from '../../../images/services/1.jpg'
import Experts from '../Experts/Experts';
import Banner from '../Banner/Banner';
const Home = () => {
  
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;