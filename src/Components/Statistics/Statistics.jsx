import React from 'react';
import Heading from '../Heading/Heading';

const Statistics = () => {
    return (
        <div>
            <div className='text-white'>
                <Heading title={' Statistics'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart Devices to the coolest accessories, we have it all!'} ></Heading>
            </div>
            <h1 className='text-3xl font-bold'>Statistics</h1>
            <h3 className='text-5xl font-bold text-fuchsia-700 text-center my-10 '>No Data to Show Statisics</h3>
        </div>
    );
};

export default Statistics;