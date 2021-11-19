import React from "react";
import WalletPopup from "../WalletPopup";



const LeftContent = () => {
    return <div className="flex justify-center items-center w-full bg-red-dark lg:rounded-r-none rounded-r-large xl:pb-0 pb-6" style={{borderTopLeftRadius:'3rem',borderBottomLeftRadius:'3rem'}}>
            <div className="flex-col max-w-md">
                <div className="flex w-full justify-center">
                    <img src="/box1.svg" alt="box" className="md:w-96 w-52" />
                </div>
                <h3 className="text-white md:text-4xl  text-center font-bold sm:text-3xl text-2xl ">LUCHOW Earned</h3>
                <div className="flex mt-3 items-center sm:gap-2 gap-1">
                    <img src="/lunachow.png" width="46" height="46" alt="logo" />
                    <h2 className="text-orange md:text-3xl sm:text-2xl text-xl font-bold text-center">12154.579 </h2>
                    <div className="flex sm:gap-2 gap-1 items-baseline">
                        <h3 className="text-white font-bold md:text-3xl sm:text-2xl text-xl">LUCHOW</h3>
                        <p className="text-gray-300 font-bold md:text-2xl sm:text-lg text-xs">≈$600</p>
                    </div>
                    
                </div>
                
            </div>
    </div>
}

const ContentCard = ({children,imageSrc,title,amount,displayMatic}) => {
    const [walletOpen,setWalletOpen] = React.useState(false);
    return <div className="2xl:mx-10 sm:mx-2 mx-1 xl:my-6 my-3 bg-red-dark px-3 py-4 rounded-2xl flex items-center justify-center relative " style={{borderRadius:'3rem'}}>
        <div className="flex items-center xl:gap-8 sm:gap-4 gap-1 max-w-md w-full">
       <img src={imageSrc} alt="" className="lg:w-20 lg:h-20 w-14 h-14" />
       <div>
            <h3 className="text-white lg:text-sm text-xs">{title}</h3>
            <div className="flex items-center gap-1 ">
                    <img src="/lunachow.png" className="lg:w-9 lg:h-9 w-7 h-7" alt="logo" />
                    <h2 className="text-orange lg:text-lg text-base font-extrabold text-center">{amount}</h2>
                    <div className="flex lg:gap-2 gap-1 items-baseline">
                    <h3 className="text-white font-bold lg:text-lg text-base">LUCHOW</h3>
                    <p className="text-gray-300 font-bold lg:text-sm text-xs">≈$600</p>
                    </div>
            </div>
            {children}
       </div>
       </div>
       {displayMatic && <>
           <div className="absolute xl:top-4 lg:right-8 top-2 right-6" onClick={() => setWalletOpen(true)}>
            <button className="py-1 rounded-2xl bg-pink-light hover:bg-pink-100 flex w-16 justify-center items-center">
                <div className="w-10 flex justify-between">
                <img src="/plus.svg" alt="meta" width={10} />
                <img src="/meta.svg" alt="meta" width={15} />
                </div>
            </button>
            </div>
            <div className="mb-20" />
       <WalletPopup open={walletOpen} setOpen={setWalletOpen} />
       </>
       }
    </div>
}

const RightContent = () => {
    return <div className="flex-col w-full bg-red-light sm:pt-10 pt-5 pb-5 lg:rounded-l-none rounded-l-large" style={{borderTopRightRadius:'3rem',borderBottomRightRadius:'3rem'}}>
            <ContentCard imageSrc="/purse.svg" title="Your LUCHOW Wallet Balance:" amount="8475.565" displayMatic={true} />
            <ContentCard imageSrc="/lock.svg" title="Remaining Locked Amount:" amount="8475.565">
                <p className="text-white text-xs">Your locked rewards are linearly released over 7 days <br className="hidden xl:block" />starting from block# 6499649 to block # 6699649</p>
            </ContentCard>
            <ContentCard imageSrc="/coin.svg" title="Unlocked Rewards:" amount="8475.565">
                <button style={{background:'linear-gradient(0deg, #FF9F07 -25%, #FF9F07 3.5%, #F8DA5E 101%, #F8DA5E 125%)'}} className="text-white border-0 lg:py-2 py-1 mt-1 px-12 focus:outline-none rounded-3xl">Claim</button>
            </ContentCard>
    </div>
}


const Hero = () => {
    return ( <div className="flex lg:flex-row flex-col relative lg:mt-36 mt-5 lg:gap-0 sm:gap-10 gap-6">
            <LeftContent />
            <RightContent />
            <img src="/paw1.svg" alt="paws" className="absolute -left-40 -top-8 hidden 2xl:block"/>
            <img src="/paw2.svg" alt="paws" className="absolute -right-40 -bottom-36 hidden 2xl:block"/>
    </div> );
}
 
export default Hero;