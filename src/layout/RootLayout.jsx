import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen w-full">
        <div>
     <NavBar></NavBar>
     </div>
     <div className="flex-grow">
     <Outlet></Outlet>
     </div>
     <Footer></Footer>
      </div>
    );
};

export default RootLayout;