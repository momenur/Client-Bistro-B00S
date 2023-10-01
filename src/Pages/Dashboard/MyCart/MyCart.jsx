import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaTrash } from 'react-icons/fa';

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this item!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-bistro-boss-momenurislam6-gmailcom.vercel.app/carts/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your Item has been deleted.',
                            'success'
                          ) 
                    }
                })
            }
        })
    }
    return (
        <div className="w-full">
            <SectionTitle subHeading='my Cart' heading='Added Items'></SectionTitle>
            <div className="px-8 py-10 bg-white">
                <div className="flex justify-between text-3xl font-semibold uppercase">
                    <h1>Total Items: {cart.length}</h1>
                    <h1>Total Price: ${total}</h1>
                    <button className="btn btn-sm bg-[#D1A054]">Payment</button>
                </div>

                {/* Table Start Here */}

                <div className="mt-8 overflow-x-auto rounded-lg">
                    <table className="table">
                        {/* head */}
                        <thead className="uppercase bg-[#D1A054] text-white">
                            <tr>
                                <th className="py-6"> SL</th>
                                <th className="py-6">item image</th>
                                <th className="py-6">item name</th>
                                <th className="py-6">price</th>
                                <th className="py-6"> action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                cart.map((row, index) => <tr
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
                                    <td>{row.price}</td>
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
    );
};

export default MyCart;