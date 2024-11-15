import { toast } from "react-toastify";

const getStoredAddList = () => {
    const storedListStr = localStorage.getItem('add-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredAddList = (id) => {
    const storedList = getStoredAddList();
    if (storedList.includes(id)) {
        console.log(id, 'already exists in the add list')
        toast.error('Already exists in the add list!', { position: 'top-center' });
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('add-list', storedListStr);
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

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        console.log(id, 'already exists in the wish list')
        toast.error('Already exists in the wish list!', { position: 'top-center' });
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
        toast.success('Successfully wish add!');
    }
}

// remove products deleted 
const removeAddProduct = (id) => {
    const storedList = getStoredAddList();
    const remaining = storedList.filter(product => product.id != id)
    const storedListStr = JSON.stringify(remaining);
    localStorage.setItem('add-list', storedListStr);
    toast.success('Successfully cart removed!');
}


export { addToStoredAddList, addToStoredWishList, getStoredAddList, getStoredWishList, removeAddProduct }


// --------------------------------------------------------------