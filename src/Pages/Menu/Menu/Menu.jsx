import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import ShowItems from "../../../components/ShowItems/ShowItems";
import menuImg from '../../../assets/Menu/banner3.jpg'
import pizzaImg from '../../../assets/Menu/pizza-bg.jpg'
import saladImg from '../../../assets/Menu/salad-bg.jpg'
import soupImg from '../../../assets/Menu/soup-bg.jpg'
import dessertImg from '../../../assets/Menu/dessert-bg.jpeg'

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const sopu = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")
    const salad = menu.filter(item => item.category === "salad")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu" subTitle="Would you like to try a dish?"></Cover>
            {/* Offered Items */}
            <SectionTitle
            subHeading="dont't miss"
            heading="TODAY'S OFFER"
            ></SectionTitle>
            <ShowItems items={offered}></ShowItems>

            {/* Desserts Items */}
            <Cover img={dessertImg} title="desserts" subTitle="Lorem Ipsum has been the industry’s standard dummy text.Lorem Ipsum has been the industry’s standard dummy text."
            ></Cover>
            <ShowItems items={dessert}></ShowItems>

            {/* Pizza Items */}
            <Cover img={pizzaImg} title="pizza" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></Cover>
            <ShowItems items={pizza}></ShowItems>

            {/* Salad Items */}
            <Cover img={saladImg} title="salads" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></Cover>
            <ShowItems items={salad}></ShowItems>

            {/* Soup Items */}
            <Cover img={soupImg} title="soups" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></Cover>
            <ShowItems items={sopu}></ShowItems>
        </div>
    );
};

export default Menu;