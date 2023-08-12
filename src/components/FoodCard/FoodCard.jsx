
const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    const handleAddCrat = item => {
        console.log(item);
    }
    return (
        <div>
            <div className="rounded-none shadow-xl card w-96 bg-base-100">
                <figure><img className="relative w-full" src={image} alt="Food Image" /></figure>
                <p className="absolute px-2 py-1 text-yellow-500 rounded-sm bg-slate-800 right-4 top-4">${price}</p>
                <div className="h-[215px]">
                    <h2 className="mt-6 mb-4 text-xl font-semibold text-center">{name}</h2>
                    <p className="px-6 text-sm">{recipe}</p>
                    <div className="flex justify-center">
                        <div className="absolute bottom-4">
                            <button onClick={() => handleAddCrat(item)} className="text-black border-t-0 border-b-4 bg-slate-300 border-s-0 border-e-0 btn btn-outline hover:text-white">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;