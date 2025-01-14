import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Main = () => {
    const location = useLocation();
    if (location.pathname == '/login' || location.pathname=='/signup') {
        return (
            <div className="flex flex-col min-h-[850px]">

                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col min-h-[850px]">
                <Navbar />
                <div className="flex-1">
                    <Outlet />
                </div>
                <Footer />
            </div>
        );
    }

};

export default Main;
