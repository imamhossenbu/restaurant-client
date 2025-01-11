import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/free-mode';

import slider1 from '../../assets/home/slide1.jpg';
import slider2 from '../../assets/home/slide2.jpg';
import slider3 from '../../assets/home/slide3.jpg';
import slider4 from '../../assets/home/slide4.jpg';
import slider5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../../components/SectionTitle/SEctionTitle';

const Category = () => {
    return (
        <div className='max-w-5xl mx-auto px-4'>
           <SectionTitle 
           subheading={'from 11:0am to 10:00 pm'}
           heading={'ORDER ONLINE'}
           >

           </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide className=''>
                    <img src={slider1} alt="" />
                    <h3 className='text-center text-2xl text-white uppercase -mt-12'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className='text-center text-2xl text-white uppercase -mt-12'>Pizzas</h3>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className='text-center text-2xl text-white uppercase -mt-12'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className='text-center text-2xl text-white uppercase -mt-12'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                <img src={slider5} alt="" />
                <h3 className='text-center text-2xl text-white uppercase -mt-12'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                <img src={slider5} alt="" />
                <h3 className='text-center text-2xl text-white uppercase -mt-12'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                <img src={slider5} alt="" />
                <h3 className='text-center text-2xl text-white uppercase -mt-12'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                <img src={slider5} alt="" />
                <h3 className='text-center text-2xl text-white uppercase -mt-12'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;