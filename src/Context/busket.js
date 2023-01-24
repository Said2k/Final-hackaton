import React, { createContext, useContext, useReducer } from 'react'
import {
    calcSubPrice,
    calcTotalPrice,
    getCountProductInCart,
} from './calcBusket'


const busketContext = createContext()

export const useBusket =() =>{
    return useContext(busketContext)

}
const INIT_STATE = {
    cart: JSON.parse(localStorage.getItem('cart')),
    cartLength: getCountProductInCart(),
   
}


function reducer(state=INIT_STATE, action){
    switch(action.type){
        case 'GET_CART':
            return {...state, cart: action.payload}
          
            default: 
            return state;
    }
}


const BusketContextProvider = ({children}) =>{
    const [state, dispatch] =useReducer(reducer, INIT_STATE);
    
    const getCart= () =>{
        let cart =JSON.parse(localStorage.getItem('cart'))
        if (!cart){
            localStorage.setItem('cart',
            JSON.stringify({
                products: [],
                totalPrice: 0,
            })
            )
            cart={
                products: [],
                totalPrice: 0,
            };
        }
        dispatch({
            type:'GET_CART',
            payload: cart,
        })
        console.log(cart);
    }

const addProductToCart = (elem) =>{
    let cart=JSON.parse(localStorage.getItem('cart'))
    if (!cart){
        cart = {
            products: [],
            totalPrice: 0,
        }
    }
    let newProduct = {
        item: elem,
        count: 1,
        subPrice: +elem.price,
    }
    let productToFind = cart.products.filter((key)=> key.item.id ===elem.id)
    if (productToFind.length==0){
        cart.products.push(newProduct)
    }else{
        cart.products = cart.products.filter((key)=>
            key.item.id !==elem.id)

    }

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem('cart', JSON.stringify(cart));

    dispatch({
        type: 'GET_CART',
        payload: cart,
    })
}

const checkProductInCart = (id)=>{
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart){
        let newCart = cart.products.filter((elem)=>elem.item.id ===id);
        return newCart.length > 0 ? true:false;

    }else{
        cart = {
            products : [],
            totalPrice: 0,
        }
    }
}


const changeProductCount = (count,id) =>{
    let cart = JSON.parse(localStorage.getItem('cart'))
    cart.products = cart.products.map((elem)=>{
        if(elem.item.id ==id){
            elem.count = count;
            elem.subPrice = calcSubPrice(elem)
        }
        return elem
    })
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem('cart', JSON.stringify(cart))
    
    dispatch({
        type: 'GET_CART',
        payload: cart
    })
}



function deleteCartProduct(id){
    let cart = JSON.parse(localStorage.getItem('cart'))
    cart.products = cart.products.filter((elem)=>elem.item.id!==id)

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem('cart', JSON.stringify(cart))
    getCart()
    dispatch({
        type: 'GET_CART_LENGTH',
        payload: cart,
    })
}





    

const values = {
deleteCartProduct,
getCart,
changeProductCount,
addProductToCart,
checkProductInCart,
cart: state.cart,

}


return <busketContext.Provider value={values}>{children}</busketContext.Provider>

}


export default BusketContextProvider;