import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Cover from '../../../Shared/Cover/Cover';
import orderCover from '../../../assets/shop/banner2.jpg';
import { useState } from 'react';
import useMenu from '../../../Hooks/UseMenu';

import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categores = ['salad','pizza','dessert','drinks']
    const { category } = useParams();
    const initialIndex = categores.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    
    console.log(category);
    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Order</title>
                
            </Helmet>
            <Cover img={orderCover} title={'Order Food'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                    
                </TabList>
                <TabPanel>
                <OrderTab items={salads}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={pizzas}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soups}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Order;