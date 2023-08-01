import { Link } from "react-router-dom";

const Navbar = () => {
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to={`/order/salads`}>Order Food</Link></li>
    </>
    return (
        <div>
            <div className="fixed z-50 max-w-screen-xl text-white bg-black navbar bg-opacity-40">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navItem
                            }
                        </ul>
                    </div>
                    <a className="">Bistro Boss</a>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        {
                            navItem
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;