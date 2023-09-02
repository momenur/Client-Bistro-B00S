import { useContext } from "react";
import SectionTitle from "../../../../components/SectionTitle";
import useMenu from "../../../../hooks/useMenu";
import useUsers from "../../../../hooks/useUsers";
import AdminGraph from "../AdminGraph/AdminGraph";
import { AuthContext } from "../../../../providers/AuthProvider";

const AdminHome = () => {
    const { user } = useContext(AuthContext)
    const userPhoto = user.photoURL;
    const [users] = useUsers();
    const [menu] = useMenu();
    return (
        <div>

            <SectionTitle subHeading="well come to Admin" heading="Dashboard"></SectionTitle>
            <div className="flex items-center justify-center">
                <AdminGraph />
                <div className="flex gap-6">
                    <div className="bg-gradient-to-r from-orange-500 via-stone-200 to-amber-500 h-[100px] flex justify-center items-center">
                        <div className="px-10">
                            <h1 className="text-2xl font-bold">Total User: {users.length}</h1>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 via-stone-200 to-amber-500 h-[100px] flex justify-center items-center">
                        <div className="px-10">
                            <h1 className="text-2xl font-bold">Total Menu: {menu.length}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between ">
                <div className="bg-[#D1A054] md:flex flex-col gap-8 p-6 rounded-3xl">
                    <div className="flex items-center gap-6 text-3xl font-bold">
                        <img className="w-[200px] h-[200px] rounded-full" src={userPhoto} alt="" />
                        <h1>Admin Dashboard</h1>
                    </div>
                    <div>
                        <h1 className="text-4xl font-semibold">Well Come <span className="text-white">{user?.displayName}</span></h1>
                        <p>User Email: {user?.email}</p>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-orange-500 via-stone-200 to-amber-500 h-[100px] flex justify-center items-center">
                    <div className="px-10">
                        <h1 className="text-2xl font-bold">Total Menu: {menu.length}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;