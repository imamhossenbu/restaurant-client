import React, { useState } from 'react';
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from '../../shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import MenuCart from '../../components/MenuCart/MenuCart';
import { useParams } from 'react-router-dom';


const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drinks','offered']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex]  = useState(initialIndex);
    const [menu] = useMenu();
    console.log(category);
    const dessert = menu.filter(item => item.category ==='dessert');
    const salad = menu.filter(item => item.category ==='salad');
    const soup = menu.filter(item => item.category ==='soup');
    const pizza = menu.filter(item => item.category ==='pizza');
    const drinks = menu.filter(item => item.category ==='drinks');
    const offered = menu.filter(item => item.category ==='offered');

    return (
        <div>
            <Cover img={orderImg} title={'Our Shop'} subtitle={'Would you like to try a dish?'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='text-center py-10 '>
                    <Tab >Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Offered</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                        {
                            salad.map(item => <MenuCart key={item._id} item={item}></MenuCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                        {
                            pizza.map(item => <MenuCart key={item._id} item={item}></MenuCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                        {
                            soup.map(item => <MenuCart key={item._id} item={item}></MenuCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                        {
                            dessert.map(item => <MenuCart key={item._id} item={item}></MenuCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                        {
                            drinks.map(item => <MenuCart key={item._id} item={item}></MenuCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                        {
                            offered.map(item => <MenuCart key={item._id} item={item}></MenuCart>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;