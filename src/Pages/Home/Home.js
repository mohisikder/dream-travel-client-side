import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import NewsLetter from '../NewsLetter/NewsLetter';
import Tours from '../Tours/Tours';

const Home = () => {
   return (
      <>
         <Banner/>
         <Tours/>
         <Faq/>
         <NewsLetter/>
      </>
   );
};

export default Home;