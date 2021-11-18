import React from "react";



const FooterLinks = ({title,links}) => {
    return <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
    <div>
      <h2 className="title-font font-medium text-black tracking-widest lg:text-lg text-sm mb-3 ">{title}</h2>
      <nav className="list-none">
        {links.map((item,index) => <li key={index}>
          <a href={item?.path} className="text-gray-600 hover:text-gray-800 text-sm mt-4">{item?.title}</a>
        </li> )}
      </nav>
    </div>
  </div>
}


const SocialLink = ({path,icon}) => {
    return <a href={path}>
        <img src={icon} alt="social icon" />
    </a>
}

const Footer = () => {
    return ( <footer className="bg-pink-light w-full h-auto py-11 pb-16">
  <div className="container px-5 mx-auto flex justify-between flex-wrap">
    <div className="flex gap-4">
      <div>
        <img src="/bigcoin.svg" alt="coinlogo" />
      </div>
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a href="/" className="flex title-font font-medium items-center md:justify-start justify-start text-gray-900">
        <img src="/icon.svg" alt="logo" />
        <span className="ml-3 text-red-dark text-xl">LUNACHOW</span>
      </a>
      <p className="mt-2 text-gray-500 max-w-sm text-sm  text-left">LUCHOW is a decentralized digital currency that can be used as a medium of exchange or to facilitate a trade. It is a borderless democratic form of digital money </p>
      </div>
    </div>
    <div className="flex justify-around md:w-max w-full">
    <FooterLinks title="Company" links={[{title:'About Us',path:'/'},{title:'Roadmap',path:'/'}]} />
    <FooterLinks title="Service" links={[{title:'Swap',path:'/'},{title:'Stake',path:'/'},{title:'NFT',path:'/'},{title:'Donate',path:'/'}]} />
    <FooterLinks title="Legal" links={[{title:'Terms & Conditions',path:'/'},{title:'Privacy Policy',path:'/'},{title:'Disclaimer',path:'/'}]} />
    <FooterLinks title="Support" links={[{title:'FAQ',path:'/'},{title:'Help Center',path:'/'},{title:'Feedback',path:'/'}]} />
    </div>
    <hr className="w-full border-red-dark mt-12" />
    <div className="flex mt-8 justify-between w-full items-center gap-1">
        <p className="text-red-dark md:text-sm text-xs">Copyright © 2021, LunaChow LLC | All Rights Reserved</p>
        <div className="flex md:gap-2 gap-1">
            <SocialLink icon="/facebook.svg" path="/" />
            <SocialLink icon="/telegram.svg" path="/" />
            <SocialLink icon="/instagram.svg" path="/" />
            <SocialLink icon="/github.svg" path="/" />
            <SocialLink icon="/reddit.svg" path="/" />
            <SocialLink icon="/twitter.svg" path="/" />
        </div>
    </div>
  </div>
</footer>
);
}
 
export default Footer;