import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SEctionTitle';
import MenuItem from '../../components/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenus(popularItems)
            })
    }, [])


    return (
        <div className='px-4'>
            <SectionTitle
                subheading="From Our Menu"
                heading={"popular items"}
            ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-10'>
                {
                    menus.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <button className='btn btn-primary uppercase'>View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;