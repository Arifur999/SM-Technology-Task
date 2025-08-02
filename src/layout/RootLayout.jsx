import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const RootLayout = () => {
    useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
    return (
        <div className="flex flex-col min-h-screen w-full font-dm">
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