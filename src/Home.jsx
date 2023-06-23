import React from 'react';
import { Outlet } from 'react-router-dom';
// import Footer from './Components/Footer';
// import Header from './Components/Header';

const Home = () => {
    return (
        <>
            {/* <Header></Header> */}

            <Outlet></Outlet>

            {/* <AllUser></AllUser> */}
            {/* <Footer></Footer> */}
        </>
    );
};

export default Home;