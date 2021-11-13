import React from "react";



const Header = () => {
    return ( <>
<header className="text-red-medium body-font bg-red-light font-bold">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="/icon.svg" alt="logo" />
      <span className="ml-3 text-xl text-red-medium">LUNACHOW</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href="/" className="mr-5 hover:text-gray-900">Home</a>
      <a href="/" className="mr-5 hover:text-gray-900">About</a>
      <a href="/" className="mr-5 hover:text-gray-900">Earn</a>
      <a href="/" className="mr-5 hover:text-gray-900">Win</a>
      <a href="/" className="mr-5 hover:text-gray-900">Marketplace</a>
      <a href="/" className="mr-5 hover:text-gray-900">Charity</a>
      <a href="/" className="mr-5 hover:text-gray-900">Roadmap</a>
      <a href="/" className="mr-5 hover:text-gray-900">More</a>
    </nav>
  </div>
</header>

    </> );
}
 
export default Header;


