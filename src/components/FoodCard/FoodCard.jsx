import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id} = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    const handleAddCrat = () => {
        if(user && user.email){
            const orderItem = {foodId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
            .then(res => res.json()
            .then(data => {
                if(data.insertedId){
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your Food Added to Cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }))
        }
        else{
            Swal.fire({
                title: 'Please Login for Order Food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log In Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div>
            <div className="rounded-none shadow-xl card w-96 bg-base-100">
                <figure><img className="border-4 border-[#D1A054]  relative w-[380px] h-[270px]" src={image} alt="Food Image" /></figure>
                <p className="absolute px-2 py-1 text-yellow-500 rounded-sm bg-slate-800 right-4 top-4">${price}</p>
                <div className="h-[215px]">
                    <h2 className="mt-6 mb-4 text-xl font-semibold text-center">{name}</h2>
                    <p className="px-6 text-sm">{recipe}</p>
                    <div className="flex justify-center">
                        <div className="absolute bottom-4">
                            <button onClick={() => handleAddCrat(item)} className="text-black border-t-0 border-b-4 bg-slate-300 border-s-0 border-e-0 btn btn-outline hover:text-white hover:bg-[#D1A054]">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;