import { FaPen, FaTrash } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import Swal from "sweetalert2";

const ManageItem = () => {
    const [menu, refetch] = useMenu()
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this Menu Item!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-server-gilt.vercel.app/menu/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'This Item has been deleted.',
                            'success'
                          ) 
                    }
                })
            }
        })
    }
    const handleUpdate = (id) => {
        console.log("Update Button Hit", id);
    }
    return (
        <div>
            <div>
                <SectionTitle subHeading="how many ??" heading="Manage Items"></SectionTitle>
                <div className="px-8 py-10 bg-white">
                    <h2 className="text-3xl font-semibold uppercase">Total Items: {menu.length}</h2>
                    {/* Table Start Here */}
                    <div className="mt-8 overflow-x-auto rounded-lg">
                        <table className="table">
                            {/* head */}
                            <thead className="uppercase bg-[#D1A054] text-white">
                                <tr>
                                    <th className="py-6"> SL</th>
                                    <th className="py-6">item image</th>
                                    <th className="py-6">item name</th>
                                    <th className="py-6">Category</th>
                                    <th className="py-6">Update</th>
                                    <th className="py-6"> action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menu.map((row, index) => <tr
                                        key={row._id}
                                    >
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="w-14 h-14 mask mask-squircle">
                                                        <img className="rounded-none" src={row.image} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {row.name}
                                        </td>
                                        <td>{row.category}</td>
                                        <td>
                                            <button onClick={() => handleUpdate(row._id)} className="btn bg-[#D1A054] text-xl text-white p-3 hover:bg-yellow-500 hover:text-green-600"><FaPen /></button>
                                        </td>
                                        <th>
                                            <button onClick={() => handleDelete(row._id)} className="btn bg-[#B91C1C] text-xl text-white p-3 hover:bg-yellow-500 hover:text-[#B91C1C]"><FaTrash /></button>
                                        </th>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;