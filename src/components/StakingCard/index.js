import React from "react";


 
const LeftContent = ({imageSrc}) => {
    return <div className="bg-cream w-96 rounded-l-2xl flex justify-center items-center">
        <img src={imageSrc} alt="coin" />
    </div>
}


const Balance = ({title,amount}) => {
    return <div>
        <p className="text-orange text-lg">{title}</p>
        <p className="text-white text-xl">{amount} <span className="text-black text-sm">≈$600</span></p>
    </div>
}

const RightContent = ({title,buttonText,staked,earned}) => {
    return <div className="bg-red-dark w-full rounded-r-2xl relative">
        <div className="absolute  w-3/4 bg-cream p-4 rounded-2xl -top-7 text-center text-black font-bold text-xl" style={{left:'10%'}}>
            <p>Stake {title} to Earn LUCHOW Rewards</p>
        </div>
        <div className="flex justify-between py-10 px-28 items-center">
            <p className="text-white font-bold text-2xl">{title}</p>
            <button className="text-white border-0 text-xl py-4 px-10 focus:outline-none bg-orange-normal-gradient bg-gradient-to-t  from-red-dark to-orange-normal hover:to-red-300 rounded-3xl">
              {buttonText}
            </button>
            <div className="flex-col text-right ">
                <Balance title="Staked Balance" amount={staked} />
                <hr className="border-orange my-3" />
                <Balance title="Earned" amount={earned} />
            </div>
        </div>
    </div>
}


const StakingCard = (props) => {
    return ( <div className="flex my-24">
            <LeftContent imageSrc={props?.imageSrc} />
            <RightContent {...props} />
    </div> );
}
 
export default StakingCard;