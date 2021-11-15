import React from "react";



const Header = () => {
    return ( <>
<header className="text-red-medium body-font bg-red-light font-bold">
  <div className="container mx-auto flex flex-wrap pt-14 pb-10 flex-col md:flex-row items-center gap-36">
    <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="/lunachow.png" width="66" height="66" alt="logo" />
      <span className="ml-3 text-red-medium font-bold text-5xl">LUNACHOW</span>
    </a>
    <nav className="flex-1 flex flex-wrap items-center text-base justify-between">
      <a href="/" className="mr-5 hover:text-gray-900 text-2xl">Home</a>
      <a href="/" className="mr-5 hover:text-gray-900 text-2xl">About</a>
      <a href="/" className="mr-5 hover:text-gray-900 text-2xl">Earn</a>
      <a href="/" className="mr-5 hover:text-gray-900 text-2xl">Win</a>
      <a href="/" className="mr-5 hover:text-gray-900 text-2xl">Marketplace</a>
      <a href="/" className="mr-5 hover:text-gray-900 text-2xl">Charity</a>
      <a href="/" className="mr-5 hover:text-gray-900 text-2xl">Roadmap</a>
      <a href="/" className="mr-5 hover:text-gray-900 text-2xl">More</a>
    </nav>
  </div>
</header>

    </> );
}
 
export default Header;


