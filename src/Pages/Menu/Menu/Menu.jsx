import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Cover/Cover";
import menuImg from '../../../assets/Menu/banner3.jpg'
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu" subTitle="Would you like to try a dish?"></Cover>
            <h1>This is Menu</h1>
        </div>
    );
};

export default Menu;