import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item => item.category === "popular")
                setMenu(popularMenu)
            })
    }, [])
    return (
        <section>
            <SectionTitle
                subHeading="Check it out"
                heading="from our menu"
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-8">
                <button className="text-yellow-500 border-t-0 border-b-4 border-s-0 border-e-0 btn btn-outline hover:text-white">Read More</button>
            </div>
        </section>
    );
};

export default PopularMenu;