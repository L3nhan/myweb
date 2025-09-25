import { Outlet } from "react-router-dom";
import Heading from "./Heading";
import NavBar from "./NavBar";

const Layout = () => {
    return ( 
        <>
            <div>
                <Heading/> {/* Heading: logo, title */}
            </div>
            <div>
                <NavBar/>
            </div>
            <div>
                {/* Render child root elments */}
                <Outlet/>
            </div>
        </> 
    );
}
 
export default Layout;

