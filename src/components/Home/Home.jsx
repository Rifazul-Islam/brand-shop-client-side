import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import FirstSection from "../FirstSection/FirstSection";
import SecondSection from "../SecondSection/SecondSection";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Home = () => {    
 const allBrands = useLoaderData()    
  const{dark} = useContext(AuthContext)
return (
<div className={`${dark ? "bg-[#23272F]" : " "} `}>
      <Banner></Banner>           
      <Brands allBrands={allBrands} ></Brands>  
      <SecondSection></SecondSection> 
      <FirstSection></FirstSection> 

</div>
);
};

export default Home;