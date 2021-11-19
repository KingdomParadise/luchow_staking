import React from "react";


 
const LeftContent = ({imageSrc}) => {
    return <div className="hidden bg-cream w-80 lg:flex justify-center items-center" style={{borderTopLeftRadius:'7rem',borderBottomLeftRadius:'7rem'}}>
        <img src={imageSrc} alt="coin" />
    </div>
}


const Balance = ({title,amount,currency,imageSrc}) => {
    return <div>
        <p className="text-white text-xl font-bold">{title}</p>
        <div className="flex items-center gap-2 justify-end">
                    <img src={imageSrc} width="36" height="36" alt="logo" />
                    <h2 className="text-orange text-2xl font-extrabold text-center">{amount}</h2>
                    <div className="flex gap-1">
                    <h3 className="text-white font-bold text-xl">{currency}</h3>
                    <p className="text-gray-300 font-bold text-lg">≈$600</p>
                    </div>
                    
        </div>
    </div>
}

const RightContent = ({title,buttonText,staked,earned,imageSrc}) => {
    return <div className="hidden lg:block bg-red-dark w-full rounded-r-2xl relative" style={{borderTopRightRadius:'7rem',borderBottomRightRadius:'7rem'}}>
        <div className="absolute  w-3/4 bg-cream p-4 -top-7 text-center text-black text-3xl" style={{left:'10%',borderRadius:'4rem'}}>
            <p className="font-medium">Stake {title} to Earn LUCHOW Rewards</p>
        </div>
        <div className="flex justify-between py-24 px-4 items-center">
            <p className="text-white font-bold 2xl:text-3xl text-2xl">{title}</p>
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



const ResponsiveLeftContent = ({imageSrc,title}) => {
    return <div className="lg:hidden bg-cream sm:w-28 w-24 flex rounded-l-2xl flex-col py-4 justify-center items-center">
    <img src={imageSrc} alt="coin" className="w-6 h-6" />
    <p className="text-white text-xs sm:font-medium mt-3">{title}</p>
    </div>
}

const ResponsiveRightContent = ({title,buttonText,staked,earned,imageSrc}) => {
    return <div className="lg:hidden bg-red-dark w-full rounded-r-2xl relative sm:px-3 px-1 py-8">
    <div className="absolute w-3/4 bg-cream p-1 -top-4 text-center text-black" style={{left:'10%',borderRadius:'4rem'}}>
        <p className="text-xs">Stake {title} to Earn LUCHOW Rewards</p>
    </div>
    <div className="flex flex-col">
        <div className="flex justify-between items-center">
            <p className="text-white text-xs font-medium">APR</p>
            <button style={{borderRadius:'4rem'}} className="text-white border-0 text-xs py-1 px-4 focus:outline-none bg-orange-normal-gradient bg-gradient-to-t  from-red-dark to-orange-normal hover:to-red-300 rounded-3xl">
                {buttonText}
            </button>
        </div>
        <div className="flex justify-between mt-3">
             <p className="text-white text-xs sm:w-auto w-20">Staked Balance</p>
             <div className="flex gap-1 sm:flex-nowrap items-center flex-wrap justify-end">
                    <img src={imageSrc} width="16" height="16" alt="logo" />
                    <h3 className="text-orange font-bold text-xs">{staked}</h3>
                    <p className="text-gray-300 font-bold text-xs"> <span className="text-white font-normal">{title}</span> ≈$600</p>
            </div>
        </div>
        <hr className="border-orange my-3" />
        <div className="flex justify-between items-center mt-1">
        <p className="text-white text-xs sm:w-auto w-20">Earned</p>
        <div className="flex gap-1 items-center sm:flex-nowrap flex-wrap justify-end">
                    <img src="/lunachow.png" className="mb-0" width="16" height="16" alt="logo" />
                    <h3 className="text-orange font-bold text-xs">{earned}</h3>
                    <p className="text-gray-300 font-bold text-xs"><span className="text-white font-normal">LUCHOW</span> >≈$600</p>
        </div>
        </div>
    </div>
</div>
}

const Accordian = () => {
    return <div className="hidden lg:block w-full absolute -bottom-64 bg-red-light px-14 py-14 pb-11 z-10" style={{borderRadius:'7rem'}}>
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
        <div className="flex flex-col gap-3 mt-3">
          <p className="text-custom-grey font-medium text-lg">Total LUCHOW Rewards</p>
          <p className="text-red-dark text-5xl font-medium text-center">0.00</p>
          <button className="text-white border-0 mt-2 text-base font-bold py-2 px-10 focus:outline-none bg-orange-normal-gradient bg-gradient-to-t  from-red-dark to-orange-normal hover:to-red-300 rounded-full">Claim</button>
        </div>
    </div>
</div>
}


const ResponsiveAccordian = () => {
    return <div className="lg:hidden w-full absolute -bottom-64 rounded-2xl bg-red-light px-2 py-14 pb-11 z-10">
    <div className="flex justify-around items-center pt-24 gap-2">
        <div className="flex flex-col gap-1 h-40">
            <p className="text-custom-grey text-xs sm:h-auto h-8">Available BNB Balance: 0.00</p>
            <input className="bg-white-pink p-2 py-1 rounded-full sm:w-24 w-20 text-xs" />
            <button className="text-white border-0 sm:w-24 w-18 mt-10 text-xs py-2 px-4 focus:outline-none bg-orange-normal-gradient bg-gradient-to-t  from-red-dark to-orange-normal hover:to-red-300 rounded-full">Approve</button>
        </div>
        <div className="flex flex-col gap-1 h-40">
            <p className="text-custom-grey text-xs sm:h-auto h-8">Stacked BNB Balance: 0.00</p>
            <input className="bg-white-pink p-2 py-1 rounded-full sm:w-24 w-20 text-xs" />
            <p className="text-custom-grey text-xs sm:h-auto h-8">Approximate Value: <span className="text-red-dark text-xs">LUCHOW</span></p>
            <button className="text-white border-0 sm:w-24 w-18 sm:mt-5 mt-1 text-xs py-2 px-4 focus:outline-none bg-orange-normal-gradient bg-gradient-to-t  from-red-dark to-orange-normal hover:to-red-300 rounded-full">Unstake</button>
        </div>
        <div className="inline h-48" style={{border:'1px solid #8E8E8E'}} />
        <div className="flex flex-col gap-1 h-40 sm:mt-2 mt-2">
          <p className="text-custom-grey text-xs text-center sm:h-auto h-8">Total LUCHOW Rewards</p>
          <p className="text-red-dark text-sm text-center sm:mt-0 mt-2">0.00</p>
          <button className="text-white border-0 sm:w-24 w-18 mt-8 text-xs py-2 px-4 focus:outline-none bg-orange-normal-gradient bg-gradient-to-t  from-red-dark to-orange-normal hover:to-red-300 rounded-full">Claim</button>
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
            <div className="flex lg:my-32 my-14 cursor-pointer z-20 relative" onClick={handleAccordian}>
                <ResponsiveLeftContent imageSrc={props?.imageSrc} title={props?.title} />
                <ResponsiveRightContent {...props} />

                <LeftContent imageSrc={props?.imageSrc} />
                <RightContent {...props} />
            </div>
           {displayAccordion &&  <>
           <Accordian />
           <ResponsiveAccordian />
            <div className="mb-96" />
            </>
            }
        </div>);
}
 
export default StakingCard;