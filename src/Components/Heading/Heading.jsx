import React from 'react';

const Heading = ({ title, subtitle }) => {
    return (
        <div>
            {/* <h2>{title}</h2>
            <p>{subtitle}</p> */}
            <div className='flex flex-col'>
                <div className="hero pt-8 pb-20 bg-fuchsia-800 ">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">{title}</h1>
                            <p className="py-6">{subtitle}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heading;