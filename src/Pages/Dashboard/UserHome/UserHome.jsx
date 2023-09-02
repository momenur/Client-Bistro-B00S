import { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle";
import AdminGraph from "../AdminHome/AdminGraph/AdminGraph";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";

const UserHome = () => {
    const { user } = useContext(AuthContext)
    const [cart] = useCart()
    return (
        <div className="mb-24">
            <SectionTitle subHeading="This Is You" heading="Dashboard" />
            <div className="flex flex-col gap-8">
                <div className="flex items-center">
                    <AdminGraph />
                    <div className="bg-gradient-to-r from-orange-500 via-stone-200 to-amber-500 h-[100px] flex justify-center items-center">
                        <div className="px-24">
                            <h1 className="text-2xl font-bold">Total Added Items: {cart.length}</h1>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-16 p-6 bg-gradient-to-r from-orange-500 via-stone-200 to-amber-500">
                    <img className="w-[200px] h-[200px] rounded-full" src={user.photoURL} alt="" />
                    <div className="flex flex-col gap-1">
                        <p>Your Name</p>
                        <h1 className="text-5xl font-semibold uppercase">{user.displayName}</h1>
                        <p>User Email: {user.email}</p>
                        <p className="text-blue-700">Well Come <span className="text-xl font-bold text-red-500 uppercase">{user.displayName}</span> to Bistro Boss Restaurants. Our Food Quality Is Best</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;