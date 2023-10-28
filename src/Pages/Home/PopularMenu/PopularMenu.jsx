import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu, ,isLoading] = useMenu()
    const popular = menu.filter(item => item.category === "popular")
    console.log(isLoading);
    if(isLoading){
        return <p>Loading...</p>
    }
    return (
        <section>
            <SectionTitle
                subHeading="Check it out"
                heading="from our menu"
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-8">
                <button className="text-yellow-500 border-t-0 border-b-4 border-s-0 border-e-0 btn btn-outline hover:text-white">Read More</button>
            </div>
        </section>
    );
};

export default PopularMenu;