import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subtitle }) => {
    return (
        <Parallax
            blur={{ min: -10, max: 10 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div
                className="hero h-[500px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className='w-[80%] md:w-[50%] mx-auto py-10  bg-black bg-opacity-60 shadow-lg'>

                    <div className="text-neutral-content text-center">
                        <div className="max-w-5xl">
                            <h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
                            <p className="mb-5 text-md uppercase">
                                {subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;
