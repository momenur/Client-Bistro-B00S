import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaHome, FaBars, FaBook, FaUtensils, FaUsers, } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import { Oval } from "react-loader-spinner";

const Dashboard = () => {
    const [admin, isLoading] = useAdmin();
    if (isLoading) {
        return <div className="flex items-center justify-center h-screen">
            <Oval
                height={80}
                width={80}
                color="orange"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="orange"
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
        </div>
    }

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
                    {
                        admin.role === 'admin' ? <>
                            <li><NavLink to='/dashboard/adminHome'><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItem'><FaUtensils />Add Item</NavLink></li>
                            <li><NavLink to='/dashboard/manageItem'><FaBars />Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/users'><FaUsers />Manage Users</NavLink></li>
                        </> : <>
                            <li><NavLink to='/dashboard/userHome'><FaHome />User Home</NavLink></li>
                            <li><NavLink to='/dashboard/mycart'><FaShoppingCart />My Cart</NavLink></li>
                            <li><NavLink to='/dashboard/userReview'><FaWallet />Your Review</NavLink></li>
                        </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome />Home</NavLink></li>
                    <li><NavLink to='/menu'> <FaBars /> Our Menu</NavLink></li>
                    <li><NavLink to={`/order/salads`}> <FaBook /> Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;