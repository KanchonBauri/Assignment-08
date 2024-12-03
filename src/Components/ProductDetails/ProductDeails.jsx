import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Heading from '../Heading/Heading';
import { FaRegHeart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { addToStoredAddList, addToStoredWishList } from '../../utils/addToDb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDeails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const singleData = data.find(product => product.id === parseInt(id));
        setProduct(singleData)
    }, [])

    const { product_title, product_image,  price, description, specification, rating } = product;
    // console.log(specification[1])


    const handleMarkAdd = (id) => {


        addToStoredAddList(id);
    }
    const handleMarkWish = (id) => {


        addToStoredWishList(id);
    }

       
   

    return (
        <>
            <div className='' >
                <Heading title={'Product Details'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart Devices to the coolest accessories, we have it all!'} ></Heading>
            </div>
            <div className='flex  justify-center items-center mx-auto '>
                {/* <h3>Product Details: {price} </h3> */}
                <div className="hero w-5/6 bg-slate-50  z-10 -mt-20 border-4 border-white rounded-xl  ">
                    <div className="hero-content flex justify-between flex-col gap-20 lg:flex-row">
                        <img
                            src={product_image}
                            className=" rounded-lg w-80 shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{product_title}</h1>
                            <p className='text-3xl font-semibold py-4 '>Prices: $ {price}</p>
                            <p className="text-2xl">{description}</p>
                            <div className="text-2xl ">
                                <p className='font-medium text-3xl py-3 '>Specification:</p>
                                <ol>
                                    {
                                        specification && specification.map((item, i) => (
                                            <li key={item}>{item}</li>
                                        ))
                                    }
                                </ol>
                            </div>
                            <p className='font-medium text-3xl py-3 '>Rating:</p>
                            <div className='flex items-center mb-4 gap-5'>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p className="text-2xl">{rating}</p>
                            </div>

                            <div className='flex gap-5 items-center'>
                                <div onClick={() => handleMarkAdd(id)} className='flex gap-2 items-center'>
                                    <button  className='btn rounded-full text-[20px] btn-primary'>Add to cart <span className="text-3xl "><GiShoppingCart /></span></button>
                                    
                                </div>
                                <button onClick={() => handleMarkWish(id)} className="text-3xl "><FaRegHeart /></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ProductDeails;