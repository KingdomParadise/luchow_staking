import React from "react";
import Header from './header';
import Footer from "./footer";



const Layout = ({children}) => {
    return ( <>
        <Header />
        <div className="my-16 mx-64">
        {children}
        </div>  
        <Footer />
    </> );
}
 
export default Layout;