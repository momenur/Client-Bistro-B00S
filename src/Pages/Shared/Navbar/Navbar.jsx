import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
    const { user, loading, logOut } = useContext(AuthContext)
    const [cart] = useCart();
    if (loading) {
        return <p>Loading</p>
    }
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sign Out Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error.massage);
            })
    }
    const navItem = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to={`/order/salads`}>Order Food</NavLink></li>
        <li>
            <NavLink to='dashboard'>
                <FaShoppingCart /> Dashboard
                <div className="badge badge-secondary">+{cart?.length}</div>
            </NavLink>
        </li>
        {
            user ? <>
                <li onClick={handleLogOut}><NavLink to='/login'>Sign Out</NavLink></li>
            </> : <>
                <li><NavLink to='/register'>Sign Up</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
            </>
        }

    </>
    return (
        <div>
            <div className="fixed z-50 max-w-screen-xl text-white bg-black navbar bg-opacity-40" id="customActive">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 customUl">
                            {
                                navItem
                            }
                        </ul>
                    </div>
                    <div>
                        <a className="text-xl tracking-[2px] cursor-pointer">BISTRO BOSS<span className="block text-sm tracking-[6px] text-center uppercase">Restaurant</span></a>
                    </div>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        {
                            navItem
                        }
                    </ul>
                </div>
                <div className="gap-4 navbar-end">
                    <div className="w-10 rounded-full">
                        <img className="w-[40px] h-[40px] rounded-full" src={user?.photoURL} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;