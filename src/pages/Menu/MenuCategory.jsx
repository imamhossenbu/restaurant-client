import React from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';
import Cover from '../../shared/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, subtitle, coverImg }) => {
    return (
        <div className='py-10'>
            {title && <Cover img={coverImg} title={title} subtitle={subtitle}></Cover>}
            <div className='grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 mt-10 mb-10'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className='text-center'>
                    <button className='border-b-2 rounded-md px-4 border-black py-1 hover:bg-gray-900 hover:text-white hover:py-2 uppercase'>Order your favorite food </button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;