import { Link, useLoaderData } from "react-router-dom";
import Heading from "../Heading/Heading";
import { useEffect, useState } from "react";
import 'react-tabs/style/react-tabs.css';
import Card from "../Card/Card";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getStoredAddList, getStoredWishList, removeAddProduct } from "../../utils/addToDb";

const Dashboard = () => {


    // const data = useLoaderData();
    const allProducts = useLoaderData()
    // console.log(allProducts)
    const [addList, setAddList] = useState([]);

    useEffect(() => {
        const storedAddList = getStoredAddList();
        const storedAddListInt = storedAddList.map(id => parseInt(id));
        const addProductList = allProducts.filter(product => storedAddListInt.includes(product.id))
        setAddList(addProductList);
    }, [allProducts])

    const handleSort = (e) => {
        // e.preventDefault();
        if (e == 'price') {
            // sort by price
            const sorted = [...addList].sort((a, b) => a.price - b.price)
            // setProducts(sorted)
            setAddList(sorted)

        }
        else {
            // next
        }
    }

    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const wishProductList = allProducts.filter(product => storedWishListInt.includes(product.id))
        setWishList(wishProductList);
        // console.log(addProductList)
    }, [allProducts])


    const handleRemove = (id) => {

        removeAddProduct(id)
        const storedAddList = getStoredAddList();
        const storedAddListInt = storedAddList.map(id => parseInt(id));
        const addProductList = allProducts.filter(product => storedAddListInt.includes(product.id))
        setAddList(addProductList);
    }





    return (
        <div>
            <div>
                <Heading title={'This is Dashboard'} subtitle={'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'} ></Heading>
            </div>
            <div className="flex items-center justify-between ">
                <div><h2 className="text-3xl font-semibold">Cart: {addList.length} </h2></div>
                <div className="flex  items-center gap-4 justify-end py-5 ">
                    <h2 className="font-bold text-2xl ">Total cost:</h2>
                    <div>
                        <button onClick={() => handleSort('price')} className="btn btn-outline mr-3">Short by Price</button>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-outline ">Purchase</button>
                    </div>
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
                                wishList.map(product => <Card handleRemove={handleRemove} key={product.id} product={product} ></Card>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <img className="mx-auto w-1/4 " src="https://i.ibb.co.com/3ctZkWW/verified-with-badge-3d-illustration-for-ecommerce-icon-free-png.webp" alt="verified-with-badge-3d-illustration-for-ecommerce-icon-free-png" />
                    <p className="py-4 font-bold text-3xl text-center pb-10 ">Payment Successfully</p>
                    <p className="text-center font-medium ">Thanks for purchasing.</p>
                    <p className="text-center font-medium pb-5 ">Total: 409.97</p>
                    <div className="flex justify-center ">
                        <form >
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/category/all">
                                <button className="btn">Close</button></Link>
                        </form>
                    </div>
                </div>
            </dialog>


        </div>
    );
};

export default Dashboard;

// ------------------------------------------------