import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className='px-4 md:w-4/12 mx-auto text-center my-10'>
            <p className='text-[#D99904] italic pb-3'>---{subheading}---</p>
            <h2 className='text-3xl border-y-2 py-3 uppercase'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;