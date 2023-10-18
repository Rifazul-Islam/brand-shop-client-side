import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import FirstSection from "../FirstSection/FirstSection";

const Home = () => {    
 const allBrands = useLoaderData()           
return (
<div>
      <Banner></Banner>           
      <Brands allBrands={allBrands} ></Brands>   
      <FirstSection></FirstSection>                     
</div>
);
};

export default Home;