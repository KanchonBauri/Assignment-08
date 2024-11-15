import { useLoaderData } from "react-router-dom";
import Heading from "../Heading/Heading";
import { useEffect, useState } from "react";
import 'react-tabs/style/react-tabs.css';
import Card from "../Card/Card";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getStoredAddList, getStoredWishList, removeAddProduct } from "../../utils/addToDb";

const Dashboard = () => {


    // const data = useLoaderData();
    const allProducts = useLoaderData()
    // ------------------------------------------------------
    // -------------------------------------------------------
    const [addList, setAddList] = useState([]);

    useEffect(() => {
        const storedAddList = getStoredAddList();
        const storedAddListInt = storedAddList.map(id => parseInt(id));
        const addProductList = allProducts.filter(product => storedAddListInt.includes(product.id))
        setAddList(addProductList);
    }, [allProducts])
    // ------------------------------------------------------
    // -------------------------------------------------------

    // const handleSort = (e) => {
    //     // e.preventDefault();
    //     if (e == 'price') {
    //         // sort by price
    //         const sorted = [...addList].sort((a, b) => a.price - b.price)
    //         // setProducts(sorted)
    //         console.log(sorted)
    //         setAddList(sorted)

    //     }
    //     else {
    //         // next
    //     }
    // }


    // ------------------------------------------------------
    // -------------------------------------------------------
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const wishProductList = allProducts.filter(product => storedWishListInt.includes(product.id))
        setWishList(wishProductList);
        // console.log(addProductList)
    }, [allProducts])

    const handleSort = (e) => {
        // e.preventDefault();
        if (e == 'price') {
            // sort by price
            const sorted = [...addList].sort((a, b) => a.price - b.price)
            const wished = [...addList].sort((a, b) => b.price - a.price)
            // setProducts(sorted)
            console.log(sorted)
            setAddList(sorted)
            setWishList(wished)

        }
        else {
            // next
        }
    }

    const handleRemove = (id) => {

        removeAddProduct(id)
        // console.log(removeAddProduct(id))
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

            {/* --------------------------------------- */}
            {/* --------------------------------------- */}
            <div className='relative'>
                <Tabs>
                    <div className=' absolute text-2xl font-semibold w-full -top-48 flex justify-center '>
                        <TabList>
                            <Tab>Cart</Tab>
                            <Tab>Wish List</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <h2 className="text-3xl font-semibold">Cart: {addList.length} </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                            {
                                addList.map(product => <Card handleRemove={handleRemove} key={product.id} product={product} ></Card>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <h2 className="text-3xl font-semibold">Wish List: {wishList.length}  </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                            {
                                wishList.map(product => <Card key={product.id} product={product} ></Card>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>


        </div>
    );
};

export default Dashboard;

// ------------------------------------------------