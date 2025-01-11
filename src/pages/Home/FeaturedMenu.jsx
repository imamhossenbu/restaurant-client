import React from 'react';
import SectionTitle from '../../components/SectionTitle/SEctionTitle';
import featuredImg from "../../assets/home/featured.jpg";

const FeaturedMenu = () => {
    return (
        <div className=" text-white">
            {/* Outer wrapper with background image */}
            <div 
                className="bg-cover bg-fixed py-16 bg-center relative"
                style={{
                    backgroundImage: `url(${featuredImg})`,
                    backgroundPosition: 'center',
                }}
            >
                {/* Opacity overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>

                {/* Content */}
                <div className="relative z-10">
                    <SectionTitle
                        subheading={"Check it out"}
                        heading={"From our menu"}
                    />
                    <div className="md:flex justify-center items-center gap-12 max-w-5xl mx-auto px-8">
                        <div className="w-full md:w-[40%]">
                            <img src={featuredImg} alt="" />
                        </div>
                        <div className="w-full md:w-[50%] space-y-2">
                            <p>January 11,2025</p>
                            <p className="uppercase">Where can I get some?</p>
                            <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae accusantium voluptate, eaque porro incidunt optio quisquam in quia quos architecto!</p>
                            <button className="px-6 py-2 border-b-2 rounded-md border-white uppercase hover:bg-white hover:text-black">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedMenu;
