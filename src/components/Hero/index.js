import React from "react";




const LeftContent = () => {
    return <div className="flex justify-center items-center w-full bg-red-dark rounded-l-3xl ">
            <div className="flex-col max-w-md">
                <img src="/box1.svg" alt="box" />
                <h3 className="text-white text-4xl  text-center font-bold ">LUCHOW Earned</h3>
                <div className="flex mt-3 items-center gap-2">
                    <img src="/lunachow.png" width="46" height="46" alt="logo" />
                    <h2 className="text-orange text-4xl font-bold text-center">12154.579 </h2>
                    <div className="flex gap-2 mt-2">
                        <h3 className="text-white font-bold text-2xl ">LUCHOW</h3>
                        <p className="text-gray-300 font-bold text-2xl ">≈$600</p>
                    </div>
                    
                </div>
                
            </div>
    </div>
}

const ContentCard = ({children,imageSrc,title,amount,displayMatic}) => {
    return <div className="mx-12 my-6 bg-red-dark h-40 rounded-2xl flex items-center justify-center relative">
        <div className="flex items-center gap-5 max-w-sm w-full">
       <img src={imageSrc} alt="" className=""  style={{maxWidth:70,maxHeight:70}} />
       <div>
            <h3 className="text-white text-sm">{title}</h3>
            <div className="flex items-center gap-2">
                    <img src="/lunachow.png" width="36" height="36" alt="logo" />
                    <h2 className="text-orange text-3xl font-extrabold text-center">{amount}</h2>
                    <div className="flex gap-2 mt-2">
                    <h3 className="text-white font-bold text-sm">LUCHOW</h3>
                    <p className="text-gray-300 font-bold text-sm">≈$600</p>
                    </div>
                    
            </div>
            {children}
       </div>
       </div>
       {displayMatic && <div className="absolute top-2 right-2">
            <button className="py-1 rounded-2xl bg-pink-light hover:bg-pink-100 flex w-16 justify-center items-center">
                <div className="w-10 flex justify-between">
                <img src="/plus.svg" alt="meta" width={10} />
                <img src="/meta.svg" alt="meta" width={15} />
                </div>
            </button>
       </div>}
    </div>
}

const RightContent = () => {
    return <div className="flex-col w-full bg-red-light rounded-r-3xl pt-10">
            <ContentCard imageSrc="/purse.svg" title="Your LUCHOW Wallet Balance:" amount="8475.565" displayMatic={true} />
            <ContentCard imageSrc="/lock.svg" title="Remaining Locked Amount:" amount="8475.565">
                <p className="text-white text-xs">Your locked rewards are linearly released over 7 days <br />starting from block# 6499649 to block # 6699649</p>
            </ContentCard>
            <ContentCard imageSrc="/coin.svg" title="Unlocked Rewards:" amount="8475.565">
                <button className="text-white border-0 py-2 mt-1 px-10 focus:outline-none bg-orange-gradient bg-gradient-to-t from-orange to-orange-light hover:to-red-300 rounded-3xl">Claim</button>
            </ContentCard>
    </div>
}


const Hero = () => {
    return ( <div className="flex relative mt-36">
            <LeftContent />
            <RightContent />
            <img src="/paw1.svg" alt="paws" className="absolute -left-40 -top-8" />
            <img src="/paw2.svg" alt="paws" className="absolute -right-40 -bottom-36" />
    </div> );
}
 
export default Hero;