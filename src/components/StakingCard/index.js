import React from "react";


 
const LeftContent = ({imageSrc}) => {
    return <div className="bg-cream w-96 flex justify-center items-center" style={{borderTopLeftRadius:'7rem',borderBottomLeftRadius:'7rem'}}>
        <img src={imageSrc} alt="coin" />
    </div>
}


const Balance = ({title,amount,currency,imageSrc}) => {
    return <div>
        <p className="text-white text-xl font-bold">{title}</p>
        <div className="flex items-center gap-2 justify-end">
                    <img src={imageSrc} width="36" height="36" alt="logo" />
                    <h2 className="text-orange text-2xl font-extrabold text-center">{amount}</h2>
                    <div className="flex gap-2">
                    <h3 className="text-white font-bold text-2xl">{currency}</h3>
                    <p className="text-gray-300 font-bold text-lg">≈$600</p>
                    </div>
                    
        </div>
    </div>
}

const RightContent = ({title,buttonText,staked,earned,imageSrc}) => {
    return <div className="bg-red-dark w-full rounded-r-2xl relative" style={{borderTopRightRadius:'7rem',borderBottomRightRadius:'7rem'}}>
        <div className="absolute  w-3/4 bg-cream p-4 -top-7 text-center text-black text-3xl" style={{left:'10%',borderRadius:'4rem'}}>
            <p className="font-medium">Stake {title} to Earn LUCHOW Rewards</p>
        </div>
        <div className="flex justify-between py-24 px-28 items-center">
            <p className="text-white font-bold text-3xl">{title}</p>
            <button style={{left:'10%',borderRadius:'4rem'}} className="text-white border-0 text-2xl py-4 px-10 focus:outline-none bg-orange-normal-gradient bg-gradient-to-t  from-red-dark to-orange-normal hover:to-red-300 rounded-3xl">
              {buttonText}
            </button>
            <div className="flex-col text-right ">
                <Balance title="Staked Balance" amount={staked} currency={title} imageSrc={imageSrc} />
                <hr className="border-orange my-3" />
                <Balance title="Earned" amount={earned} currency={title} imageSrc="/lunachow.png" />
            </div>
        </div>
    </div>
}


const StakingCard = (props) => {
    return ( <div className="flex my-32">
            <LeftContent imageSrc={props?.imageSrc} />
            <RightContent {...props} />
    </div> );
}
 
export default StakingCard;