import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SEctionTitle';
import MenuItem from '../../components/MenuItem/MenuItem';
import useMenu from '../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category ==='popular');

    return (
        <div className='px-4'>
            <SectionTitle
                subheading="From Our Menu"
                heading={"popular items"}
            ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-10'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <button className='border-b-2 rounded-md px-4 border-black py-1 hover:bg-gray-900 hover:text-white hover:py-2 uppercase'>View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;