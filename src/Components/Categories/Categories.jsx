import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        <div>
             <div role="tablist" className=" flex justify-start p-10 flex-col gap-10  tabs-boxed">
                {
                    categories.map(category => (<NavLink key={category.category}  to={`/category/${category.category}`} role='tab' className={({isActive}) => `tab ${isActive ? 'tab-active' : ' '}`}>{category.category}</NavLink> )   )
                }
             </div>
        </div>
    );
};

export default Categories;