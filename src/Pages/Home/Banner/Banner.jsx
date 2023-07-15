import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from '../../../assets/Home/01.jpg'
import slider2 from '../../../assets/Home/02.jpg'
const Banner = () => {
    return (
        <div>
            <Carousel showArrows={true}>
                <div>
                    <img src={slider1}/>
                </div>
                <div>
                    <img src={slider2}/>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;