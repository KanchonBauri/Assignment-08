import React from 'react';
import Banner from '../Banner/Banner';
// import Heading from '../Heading/Heading';
import Categories from '../Categories/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData();
    // console.log(categories)
    return (
        <div className=''>
            <Banner></Banner>
            <div className='flex justify-start mt-5'>
                <Categories categories={categories} ></Categories>
                <Outlet></Outlet>
            </div>

            {/* <Heading title={'This is Title'} subtitle={'this is subtitle'} ></Heading> */}
        </div>
    );
};

export default Home;