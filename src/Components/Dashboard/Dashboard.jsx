import { useLoaderData } from "react-router-dom";
import Heading from "../Heading/Heading";
import { useState } from "react";
import sortBy from "sort-by";
import Card from "../Card/Card";

const Dashboard = () => {
    const data = useLoaderData();
    // console.log(data)
    const [products, setProducts] = useState(data);

    const handleSort = sortBy => {
        if (sortBy == 'price') {
            console.log('no')
            const sorted = [...data].sort((a,b) => b.price - a.price);
            setProducts(sorted)
        } else {
            console.log('yes')
        }
    }

    return (
        <div>
            <div>
                <Heading title={'This is Dashboard'} subtitle={'this is subtitle'} ></Heading>
            </div>
            <div>
                <div></div>
                <div className="flex  justify-end py-5 ">
                    <button onClick={() => handleSort('price')} className="btn mr-3">Short by Price</button>
                    <button className="btn">Purchase</button>
                </div>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                    products.map(product => <Card key={product.id} product={product} ></Card>)
                }
            </div> */}
        </div>
    );
};

export default Dashboard;