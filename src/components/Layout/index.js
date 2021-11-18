import React from "react";
import Header from "./header";
import Footer from "./footer";



const Layout = ({children}) => {
    return ( <>
        <Header />
        <div className="my-16 2xl:mx-64 mx-3">
        {children}
        </div>  
        <Footer />
    </> );
}
 
export default Layout;