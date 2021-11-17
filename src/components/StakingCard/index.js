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
    const [displayAccordion, setDisplayAccordion] = React.useState(false);

    const handleAccordian = () => {
        setDisplayAccordion(state => !state);
    }
    return ( <div className="relative">
            <div className="flex my-32 cursor-pointer z-20 relative" onClick={handleAccordian}>
                <LeftContent imageSrc={props?.imageSrc} />
                <RightContent {...props} />
            </div>
           {displayAccordion &&  <><div className="w-full absolute -bottom-64 bg-red-light px-14 py-14 pb-11 z-10" style={{borderRadius:'7rem'}}>
                <div className="flex justify-around items-center pt-36">
                    <div className="flex flex-col gap-2">
                        <p className="text-custom-grey font-medium">Available BNB Balance: 0.00</p>
                        <input className="bg-white-pink p-2 rounded-full" />
                        <button className="text-white border-0 mt-10 text-base font-bold py-2 px-10 focus:outline-none bg-orange-normal-gradient bg-gradient-to-t  from-red-dark to-orange-normal hover:to-red-300 rounded-full">Approve</button>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-custom-grey font-medium">Stacked BNB Balance: 0.00</p>
                        <input className="bg-white-pink p-2 rounded-full" />
                        <p className="text-custom-grey font-medium">Approximate Value: <span className="text-red-dark">LUCHOW</span></p>
                        <button className="text-white border-0 mt-2 text-base font-bold py-2 px-10 focus:outline-none bg-orange-normal-gradient bg-gradient-to-t  from-red-dark to-orange-normal hover:to-red-300 rounded-full">Unstake</button>
                    </div>
                    <div className="inline h-48" style={{border:'1px solid #8E8E8E'}} />
                    <div className="flex flex-col gap-3">
                      <p className="text-custom-grey font-medium text-lg">Total LUCHOW Rewards</p>
                      <p className="text-red-dark text-5xl font-medium text-center">0.00</p>
                      <button className="text-white border-0 mt-2 text-base font-bold py-2 px-10 focus:outline-none bg-orange-normal-gradient bg-gradient-to-t  from-red-dark to-orange-normal hover:to-red-300 rounded-full">Claim</button>
                    </div>
                </div>
            </div>
            <div className="mb-96" />
            </>
            }
        </div>);
}
 
export default StakingCard;