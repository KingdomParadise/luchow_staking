import React from "react";
import StakingCard from "../StakingCard";



const StakingSection = () => {
    return ( <div className="my-20">
        <p className="text-red-dark text-center text-5xl my-10">7 Available Staking Options</p>
        <StakingCard imageSrc="/binance.svg" title="BNB" buttonText="APR 65%" staked="45659.656.BNB" earned="846568.854.LUCHOW"/>
        <StakingCard imageSrc="/pancake.svg" title="CAKE" buttonText="APR 65%" staked="45659.656.CAKE" earned="846568.854.LUCHOW"/>
        <StakingCard imageSrc="/tether.svg" title="USDT" buttonText="APR 65%" staked="45659.656.USDT" earned="846568.854.LUCHOW"/>
        <StakingCard imageSrc="/icon.svg" title="LUCHOW" buttonText="APR 65%" staked="45659.656.LUCHOW" earned="846568.854.LUCHOW"/>
        <StakingCard imageSrc="/bint.svg" title="BNB-USDT" buttonText="APR 65%" staked="45659.656.BNB-USDT" earned="846568.854.LUCHOW"/>
        <StakingCard imageSrc="/binp.svg" title="BNB-CAKE" buttonText="APR 65%" staked="45659.656.BNB-CAKE" earned="846568.854.LUCHOW"/>
        <StakingCard imageSrc="/pant.svg" title="CAKE-USDT" buttonText="APR 65%" staked="45659.656.CAKE-USDT" earned="846568.854.LUCHOW"/>
    </div> );
}
 
export default StakingSection;