import React from "react";


const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/'},
  { name: 'Earn', path: '/'},
  { name: 'Win', path: '/'},
  { name: 'Marketplace', path: '/'},
  { name: 'Charity', path: '/'},
  { name: 'Roadmap', path: '/'},
  { name: 'More', path: '/'},
]

const Header = () => {
   const handleClick = (e) => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
   }
    return (<>
<div className="text-red-medium body-font bg-red-light font-bold">
  <div className="container sm:mx-auto flex flex-wrap justify-between lg:pt-14 pt-10 pb-10  md:flex-row items-center sm:gap-36 gap-0">
    <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="/lunachow.png" width="66" height="66" alt="logo" className="hidden 2xl:block" />
      <span className="ml-3 text-red-medium font-bold 2xl:text-5xl text-3xl lg:pt-0 pt-4">LUNACHOW</span>
    </a>
    <nav className="hidden flex-1 2xl:flex flex-wrap items-center text-base justify-between">
      {navigation.map(({ name, path }, index) => <a key={index} href={path} className="mr-5 hover:text-gray-900 text-2xl">{name}</a>)}
    </nav>

    <div className="2xl:hidden flex items-center">
	  <button className="outline-none mobile-menu-button" onClick={handleClick}>
		<svg
			className="w-10 h-10 text-red-dark"
			x-show="!showMenu"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
		<path d="M4 6h16M4 12h16M4 18h16"></path>
		</svg>
	</button>
  </div>
  </div>
  <div className="hidden mobile-menu">
	<ul className="px-2 py-4">
    {navigation.map((item,index) => <li key={index}><a href={item.path} className="block text-md px-2 py-4 transition duration-300">{item.name}</a></li>)}
	</ul>
</div>
</div>
</>);
}
 
export default Header;


