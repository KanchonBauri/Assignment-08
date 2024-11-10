import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";

const Root = () => {
    return (
        <div>
            <div className="h-16">
                <NavBar></NavBar>
            </div>
            <div className="min-h-[calc(100vh-316px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;