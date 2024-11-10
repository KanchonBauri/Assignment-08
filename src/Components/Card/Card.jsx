import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const { product_image,
        product_title, price, id, } = product;

    return (
        <div>
            <div id='allCategories' className="card bg-base-100 h-96 m-2 shadow-xl">
                <figure className="p-5">
                    <img
                        src={product_image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product_title}</h2>
                    <p>$ {price}</p>
                    <Link to={`/product/${id}`} >
                        <div className="card-actions">
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;