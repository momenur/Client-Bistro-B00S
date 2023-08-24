import { Oval } from "react-loader-spinner";
import SectionTitle from "../../../components/SectionTitle";
import useUsers from "../../../hooks/useUsers";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const [users, refetch, isLoading] = useUsers();


    const handleUserDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this User!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'This User has been deleted.',
                            'success'
                          ) 
                    }
                })
            }
        })
    }


    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'This User Make You Admin Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
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
        <div>
            <SectionTitle subHeading="how many ??" heading="Manage users"></SectionTitle>
            <div className="px-8 py-10 bg-white">
                <h2 className="text-3xl font-semibold uppercase">Total Users: {users.length}</h2>
                {/* Table Start Here */}
                <div className="mt-8 overflow-x-auto rounded-lg">
                    <table className="table">
                        {/* head */}
                        <thead className="uppercase bg-[#D1A054] text-white">
                            <tr>
                                <th className="py-6"> SL</th>
                                <th className="py-6">Name</th>
                                <th className="py-6">Email</th>
                                <th className="py-6">role</th>
                                <th className="py-6"> action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                users.map((row, index) => <tr
                                    key={row._id}
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        {row.name}
                                    </td>
                                    <td>
                                        {row.email}
                                    </td>
                                    <td>
                                        {
                                            row.role === 'admin' ? <>
                                            <p>admin</p>
                                            </> : <>
                                                <button onClick={() => handleMakeAdmin(row._id)} className="btn bg-[#D1A054] text-xl text-white p-3 hover:bg-yellow-500 hover:text-black"><FaUserShield /></button>
                                            </>
                                        }
                                    </td>
                                    <th>
                                        <button onClick={() => handleUserDelete(row._id)} className="btn bg-[#B91C1C] text-xl text-white p-3 hover:bg-yellow-500 hover:text-[#B91C1C]"><FaTrash /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;