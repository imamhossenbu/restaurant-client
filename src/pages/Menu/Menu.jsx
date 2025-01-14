import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover';
import menuBg from '../../assets/menu/banner3.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SEctionTitle';
import MenuCategory from './MenuCategory';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import { Link } from 'react-router-dom';
import MenuItem from '../../components/MenuItem/MenuItem';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div>

            <Helmet>
                <title>Menu | Bistro Boss Restaurant</title>
            </Helmet>
            <Cover img={menuBg} title={'our menu'} subtitle={'Would You Like To Try a Dish?'}></Cover>
            {/* offered menu */}
            <div className='py-10'>
                <SectionTitle subheading={"Don't Miss"} heading={"Today's offer"}></SectionTitle>
                <div className='grid md:grid-cols-2 gap-6 max-w-5xl px-4 mx-auto mt-10 mb-10'>
                    {
                        offered.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <Link to={`/order/offered`}>
                    <div className='text-center'>
                        <button className='border-b-2 rounded-md px-4 border-black py-1 hover:bg-gray-900 hover:text-white hover:py-2 uppercase'>Order your favorite food </button>
                    </div>
                </Link>
            </div>





            {/* dessert menu */}
            <MenuCategory items={dessert} title={'dessert'} subtitle={'Best Dessert Items'} coverImg={dessertImg}></MenuCategory>

            {/* Pizza menu */}
            <MenuCategory items={pizza} title={'pizza'} subtitle={'Best Pizza Items'} coverImg={pizzaImg} ></MenuCategory>

            {/* salad menu */}
            <MenuCategory items={salad} title={'salad'} subtitle={'Best Salad items'} coverImg={saladImg}> </MenuCategory>

            {/* soup menu */}
            <MenuCategory items={soup} title={'soup'} subtitle={'Best Soup Items'} coverImg={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;