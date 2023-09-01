import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const AddItem = () => {
    const [ , refetch] = useMenu();
    const handleAddAnItem = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const price = parseInt(form.price.value);
        const recipe = form.recipe.value;
        const itemPhoto = form.itemPhoto.value;
        const category = form.category.value;
        console.log(name, price, recipe, itemPhoto, category);
        const addItem = {name, price, recipe, image:itemPhoto, category}
        fetch('http://localhost:5000/menu', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addItem)
        })
        .then(res => res.json()
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your Food Added to Cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                refetch()
            }))
    }
    return (
        <div>
            <SectionTitle subHeading="More to Add" heading="Add an Item"></SectionTitle>
            <div>
                <form onSubmit={handleAddAnItem} className="bg-base-200">
                    <div className="shadow-2xl card bg-base-200">
                        <div className="card-body">
                            <div className="flex w-full gap-8">
                                <div className="w-full form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Give Item Name" className="input input-bordered" />
                                </div>
                                <div className="w-full form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name="price" placeholder="Give Item Price" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Recipe</span>
                                </label>
                                <input type="text" name="recipe" placeholder="Give Item Recipe" className="input input-bordered" />
                            </div>
                            <div className="flex gap-8">
                                <div className="w-full form-control">
                                    <label className="label">
                                        <span className="label-text">Image URL</span>
                                    </label>
                                    <input type="text" name="itemPhoto" placeholder="Give Item Image URL" className="input input-bordered" />

                                </div>
                                <div className="w-full form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <select id="cars" className="px-4 py-3 border-2 rounded-lg" name="category">
                                        <option className="" value="salad">Salad</option>
                                        <option className="" value="pizza">Pizza</option>
                                        <option className="" value="soup">Soup</option>
                                        <option className="" value="drinks">Drinks</option>
                                        <option className="" value="dessert">Dessert</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mx-auto mt-6 ">
                                <input className="px-8 btn btn-primary bg-[#D1A054] hover:bg-white border-none hover:text-black" type="submit" value="Add an Item" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default AddItem;