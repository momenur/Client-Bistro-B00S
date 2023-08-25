import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";

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
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to={`/order/salads`}>Order Food</Link></li>
        <li>
            <Link to='dashboard'>
                <FaShoppingCart /> Shopping Cart
                <div className="badge badge-secondary">+{cart?.length}</div>
            </Link>
        </li>
        {
            user ? <>
                <li onClick={handleLogOut}><Link to='/login'>Sign Out</Link></li>
            </> : <>
                <li><Link to='/register'>Sign Up</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </>
        }

    </>
    console.log(user);
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
                <div className="gap-4 navbar-end">
                    <a className="font-semibold ">Hi <span className="text-sm text-yellow-500">{user?.displayName}</span></a>
                    <div className="w-10 rounded-full">
                        <img className="w-[40px] h-[40px] rounded-full" src={user?.photoURL}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;