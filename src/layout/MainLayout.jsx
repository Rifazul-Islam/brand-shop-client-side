import { Outlet } from "react-router-dom";

const MainLayout = () => {
return (
<div>
      <h3> This is a MainLayout page</h3>    
      <Outlet></Outlet>                                
</div>
);
};

export default MainLayout;