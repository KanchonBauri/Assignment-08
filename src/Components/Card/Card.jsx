import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ImCross } from "react-icons/im";

const Card = ({ product, handleRemove }) => {
    const { pathname } = useLocation()
    // console.log(pathname)


    const { product_image,
        product_title, price, id, } = product;

    return (
        <div >

            <div id='allCategories' className="card relative bg-base-100 h-96 m-2 shadow-xl">
                <figure className="p-5">
                    <img
                        src={product_image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body  items-center text-center">
                    <h2 className="card-title">{product_title}</h2>
                    <p>$ {price}</p>
                    <Link to={`/product/${id}`} >
                        <div className="card-actions">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </Link>
                </div>
                {
                    pathname === '/dashboard' && <div onClick={()=> handleRemove(id)} >
                        <button  className=' absolute text-1xl top-2 right-4 text-red-900 '><ImCross /></button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Card;

// -----------------------------------------