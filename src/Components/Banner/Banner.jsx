import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col'>
            <div className="hero pb-40 bg-fuchsia-800 ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>

                    </div>
                </div>

            </div>
            <div className='-mt-40 mx-auto'>
                <img className='w-[900px] border-4 bg-slate-200 bg-opacity-40 p-4 h-96 '  src="https://i.ibb.co.com/4YWhVK1/banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;