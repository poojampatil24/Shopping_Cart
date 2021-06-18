export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const CLEAR_CART = 'CLEAR_CART';

const addProduct = (product, color, state) => {
  const cart = [...state.cart];
  const productIndex = cart.findIndex(item => {
    return color
      ? item.id === product.id && color === item.color
      : product.id === item.id;
  });

  productIndex < 0
    ? cart.push({ ...product, quantity: 1, color })
    : (cart[productIndex].quantity += 1);

  localStorage.setItem('shopping_cart', JSON.stringify(cart));

  return { ...state, cart };
};

const removeProduct = (productId, color, state) => {
  const cart = [...state.cart];
  const productIndex = cart.findIndex(item => {
    return color === false
      ? item.id === productId
      : item.id === productId && item.color === color;
  });

  cart[productIndex].quantity === 1
    ? cart.splice(productIndex, 1)
    : (cart[productIndex].quantity -= 1);

  localStorage.setItem('shopping_cart', JSON.stringify(cart));

  return { ...state, cart };
};

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProduct(action.product, action.color, state);
    case REMOVE_PRODUCT:
      return removeProduct(action.productId, action.color, state);
    case CLEAR_CART:
      localStorage.setItem('shopping_cart', JSON.stringify([]));
      return {
        ...state,
        cart: []
      };
    default:
      return state;
  }
};
