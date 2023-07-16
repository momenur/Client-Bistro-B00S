import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect( () => {
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
        </section>
    );
};

export default PopularMenu;