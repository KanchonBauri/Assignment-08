import { toast } from "react-toastify";

const getStoredAddList = () => {
  
    const storedListStr = localStorage.getItem('add-list');
    // console.log(storedListStr)
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredAddList = (product) => {
    const storedList = getStoredAddList();
    
    if (storedList.includes(product)) {
        console.log(product, 'already exists in the add list')
        toast.error('Already exists in the add list!', { position: 'top-center' });
    }
    else {
        storedList.push(product);
        // const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('add-list', JSON.stringify(storedList));
        toast.success('Successfully cart add!');
    }
}

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (product) => {
    const storedList = getStoredWishList();
    if (storedList.includes(product)) {
        console.log(product, 'already exists in the wish list')
        toast.error('Already exists in the wish list!', { position: 'top-center' });
    }
    else {
        storedList.push(product);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
        toast.success('Successfully wish add!');
    }
}

// remove products deleted 
const removeAddProduct = (id) => {
    const storedList = getStoredAddList();
    console.log(storedList)
    // console.log(storedList)
    const remaining = storedList.filter(product => product != id)
    // const storedListStr = JSON.stringify(remaining);
    localStorage.setItem('add-list', JSON.stringify(remaining));
    toast.success('Successfully cart removed!');
   
}


export { addToStoredAddList, addToStoredWishList, getStoredAddList, getStoredWishList, removeAddProduct }


// --------------------------------------------------------------