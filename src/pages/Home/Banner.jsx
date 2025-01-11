import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../src/assets/home/01.jpg";
import img2 from "../../../src/assets/home/02.jpg";
import img3 from "../../../src/assets/home/03.png";
import img4 from "../../../src/assets/home/04.jpg";
import img5 from "../../../src/assets/home/05.png";
import img6 from "../../../src/assets/home/06.png";
import '../../../src/index.css'

const Banner = () => {
    return (
        <div className='w-full'>
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                interval={4000}
                showThumbs={true}
                showStatus={false}
                className="carousel-container"
            >
                <div>
                    <img className='h-[500px] object-cover w-full' src={img1} alt="Slide 1" />
                </div>
                <div>
                    <img className='h-[500px] object-cover w-full' src={img2} alt="Slide 2" />
                </div>
                <div>
                    <img className='h-[500px] object-cover w-full' src={img3} alt="Slide 3" />
                </div>
                <div>
                    <img className='h-[500px] object-cover w-full' src={img4} alt="Slide 4" />
                </div>
                <div>
                    <img className='h-[500px] object-cover w-full' src={img5} alt="Slide 5" />
                </div>
                <div>
                    <img className='h-[500px] object-cover w-full' src={img6} alt="Slide 6" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
