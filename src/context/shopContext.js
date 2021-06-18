import React, { useReducer, useEffect, useState } from 'react';

import {
  shopReducer,
  ADD_PRODUCT,
  CLEAR_CART,
  REMOVE_PRODUCT
} from '../reducer/shopReducer';

const ShopContext = React.createContext({});
export default ShopContext;

export function Provider(props) {
  const categories = [
    'eyeliner',
    'lipstick',
  ];

  const [products, setProducts] = useState([]);

  const [state, dispatch] = useReducer(shopReducer, { cart: [] }, () => {
    const storeCart = localStorage.getItem('shopping_cart');
    return storeCart === null ? { cart: [] } : { cart: JSON.parse(storeCart) };
  });

  const prepareData = data => {
    const products = [];
    data.forEach(item => {
      products.push({
        id: item.id,
        brand: item.brand,
        name: item.name,
        price: item.price,
        image_link: item.image_link,
        product_link: item.product_link,
        product_type: item.product_type,
        product_colors: [...item.product_colors],
        description: item.description.split('  ')[0]
      });
    });
    return products;
  };

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(prepareData(data));
      })
      .catch(err => console.log(err));
  }, []);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      fetch(
        'https://makeup-api.herokuapp.com/api/v1/products.json?brand=smashbox'
      )
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  };

  const addProduct = (product, color = false) =>
    dispatch({ type: ADD_PRODUCT, product, color });

  const removeProduct = (productId, color) =>
    dispatch({ type: REMOVE_PRODUCT, productId, color });

  const clearCart = () => dispatch({ type: CLEAR_CART });

  return (
    <ShopContext.Provider
      value={{
        cart: state.cart,
        products,
        categories,
        addProduct,
        removeProduct,
        clearCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}
