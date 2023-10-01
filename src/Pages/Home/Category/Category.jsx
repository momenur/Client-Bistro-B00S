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
                slidesPerView={4.2}
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
                    <h3 className='-mt-6 text-center text-white uppercase md:text-3xl md:-mt-16 md:me-10'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='-mt-6 text-center text-white uppercase md:text-3xl md:-mt-16 md:me-10'>pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='-mt-6 text-center text-white uppercase md:text-3xl md:-mt-16 md:me-10'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='-mt-6 text-center text-white uppercase md:text-3xl md:-mt-16 md:me-10'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='-mt-6 text-center text-white uppercase md:text-3xl md:-mt-16 md:me-10'>Desserts</h3>
                </SwiperSlide>
            </Swiper>
            <div className='mt-24 bg-custom' data-aos="fade-up">
                <div className='py-32 mx-32 '>
                    <div className='px-20 py-20 text-center text-white bg-black bg-opacity-50' data-aos="zoom-out">
                        <h1 className='mb-4 text-4xl uppercase'>Bistro boss</h1>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus accusantium magnam beatae rerum esse. Doloremque voluptate odio esse culpa sunt quasi reiciendis aspernatur corporis maxime commodi, enim, ut consectetur incidunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quasi porro delectus vel maxime eligendi odio dignissimos nesciunt, rerum officiis?</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Category;