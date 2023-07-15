import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { FreeMode, Pagination } from 'swiper/modules';

import './Category.css'

import slide1 from '../../../assets/Home/slide1.jpg'
import slide2 from '../../../assets/Home/slide2.jpg'
import slide3 from '../../../assets/Home/slide3.jpg'
import slide4 from '../../../assets/Home/slide4.jpg'
import slide5 from '../../../assets/Home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle';
const Category = () => {
    return (

        <div>
            <SectionTitle
            subHeading="From 11.00am to 10.00pm"
            heading="order online"
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='md:text-3xl uppercase text-center text-white -mt-6 md:-mt-16 md:me-10'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='md:text-3xl uppercase text-center text-white -mt-6 md:-mt-16 md:me-10'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='md:text-3xl uppercase text-center text-white -mt-6 md:-mt-16 md:me-10'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='md:text-3xl uppercase text-center text-white -mt-6 md:-mt-16 md:me-10'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='md:text-3xl uppercase text-center text-white -mt-6 md:-mt-16 md:me-10'>Desserts</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;