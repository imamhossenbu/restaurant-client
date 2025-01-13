import React from 'react';

const MenuItem = ({item}) => {
    const {name,image, price, recipe} =item;
    return (
        <div className='flex space-x-2'>
            <img style={{borderRadius:'0 200px 200px 200px',height:'90px'}} className='w-[100px] ' src={image} alt="" />
            <div>
                <h2 className='text-xl pb-2 uppercase'>{name}---</h2>
                <p className='text-gray-500'>{recipe}</p>
            </div>
            <p className='text-yellow-500 font-bold'>${price}</p>
        </div>
    );
};

export default MenuItem;