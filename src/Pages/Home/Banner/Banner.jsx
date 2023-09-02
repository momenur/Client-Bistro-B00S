import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'
import slider1 from '../../../assets/Home/01.jpg'
import slider2 from '../../../assets/Home/02.jpg'
import slider3 from '../../../assets/Home/03.png'
import slider4 from '../../../assets/Home/04.jpg'
import slider5 from '../../../assets/Home/05.png'
const Banner = () => {
    return (
        <div>
            <Carousel showArrows={false} infiniteLoop={true} autoPlay={true}>
                <div>
                    <img src={slider1}/>
                </div>
                <div>
                    <img src={slider2}/>
                </div>
                <div>
                    <img src={slider3}/>
                </div>
                <div>
                    <img src={slider4}/>
                </div>
                <div>
                    <img src={slider5}/>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;