import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    const isAuthentication = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            {isAuthentication || <Navbar />}
            <Outlet />
            {isAuthentication || <Footer />}
        </div>
    );
};

export default Main;