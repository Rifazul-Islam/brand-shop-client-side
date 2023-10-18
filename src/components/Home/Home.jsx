import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";

const Home = () => {    
 const allBrands = useLoaderData()           
return (
<div>
      <Banner></Banner>           
      <Brands allBrands={allBrands} ></Brands>                        
</div>
);
};

export default Home;