import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome,  } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <Helmet>
                <title>Bistro Boss | Dashboard</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="flex flex-col px-10 drawer-content bg-base-200">

                <Outlet />

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]" id="dashboard">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="h-full p-4 menu w-80 text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/userHome'><FaHome />User Home</NavLink></li>
                    <li><NavLink to='/dashboard/mycart'><FaShoppingCart />My Cart</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaWallet />Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/reservations'><FaCalendarAlt />Reservations</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome/>Home</NavLink></li>
                    <li><NavLink to='/menu'>Our Menu</NavLink></li>
                    <li><NavLink to={`/order/salads`}>Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;