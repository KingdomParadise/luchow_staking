import React from "react";
import StakingCard from "../StakingCard";



const StakingSection = () => {
    return ( <div className="my-20">
        <p className="text-red-dark text-center text-6xl my-10 font-bold">7 Available Staking Options</p>
        <StakingCard imageSrc="/binance.svg" title="BNB" buttonText="APR 65%" staked="45659.656" earned="846568.854"/>
        <StakingCard imageSrc="/pancake.svg" title="CAKE" buttonText="APR 65%" staked="45659.656" earned="846568.854"/>
        <StakingCard imageSrc="/tether.svg" title="USDT" buttonText="APR 65%" staked="45659.656" earned="846568.854"/>
        <StakingCard imageSrc="/lunachow.png" title="LUCHOW" buttonText="APR 65%" staked="45659.656" earned="846568.854"/>
        <StakingCard imageSrc="/bint.svg" title="BNB-USDT" buttonText="APR 65%" staked="45659.656" earned="846568.854"/>
        <StakingCard imageSrc="/binp.svg" title="BNB-CAKE" buttonText="APR 65%" staked="45659.656" earned="846568.854"/>
        <StakingCard imageSrc="/pant.svg" title="CAKE-USDT" buttonText="APR 65%" staked="45659.656" earned="846568.854"/>
    </div> );
}
 
export default StakingSection;