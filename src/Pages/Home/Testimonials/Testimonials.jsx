import SectionTitle from "../../../components/SectionTitle";
import { useEffect, useState } from "react";
// Swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// React Rating
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import quote from '../../../assets/Home/quote.png'

const Testimonials = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
          let response = await fetch('https://bistro-server-gilt.vercel.app/reviews')
          response = await response.json()
          setReview(response)
        }
    
        fetchMyAPI()
      }, [])

    // useEffect(() => {
    //     fetch("https://bistro-server-gilt.vercel.app/reviews")
    //         .then(res => res.json())
    //         .then(data => setReview(data))
    // }, [])
    console.log(review);
    return (
        <section>
            <SectionTitle
                subHeading="what our client say"
                heading="testimonials"
            ></SectionTitle>
            <div className="mb-20">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        review.map(item => <SwiperSlide
                            key={item._id}
                        >
                            <div className="flex justify-center mb-2">
                                <Rating
                                    style={{ maxWidth: 150 }}
                                    value={item.rating}
                                    readOnly
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img className="w-[100px] mb-8" src={quote} alt="" />
                            </div>
                            <div className="px-32">
                                <p>{item.details}</p>
                                <h3 className="mt-4 text-3xl text-center text-yellow-500">{item.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;