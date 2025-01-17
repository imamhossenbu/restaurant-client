import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SEctionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';
import axios from 'axios';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Testimonial = () => {
    const axiosSecurePublic = useAxiosPublic();
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        axiosSecurePublic.get('/reviews')
        .then(data => setReviews(data.data))
    },[])


    return (
        <section className='max-w-5xl mx-auto px-4'>
            <SectionTitle
                subheading={"What Our Client Say"}
                heading={"testimonials"}
            ></SectionTitle>

            <Swiper loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
                

                    { 
                    reviews.map(review =><SwiperSlide
                    key={review._id}
                    >

                        <div className='w-[80%] mx-auto flex flex-col justify-center items-center'>
                            <Rating 
                            style={{ maxWidth: 180 ,
                            }}
                            value={review.rating}
                            readOnly/>
                            <p className='text-5xl pt-6'><FaQuoteLeft /></p>
                            <p className='text-center py-3'>{review.details}</p>
                            <h2 className='text-2xl text-center text-orange-500'>{review.name}</h2>
                        </div>
                    </SwiperSlide> )
                    
                    }
            </Swiper>
        </section>
    );
};

export default Testimonial;