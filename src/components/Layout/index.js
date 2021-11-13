import React from "react";
import Header from './header';




const Layout = ({children}) => {
    return ( <>
        <Header />
        <div className="my-16 mx-16">
        {children}
        </div>  
    </> );
}
 
export default Layout;