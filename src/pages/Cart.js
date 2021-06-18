import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShopContext from '../context/shopContext';
import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem';


function Cart() {
  const context = useContext(ShopContext);

  const getTotalPrice = cart => {
    let total = 0;
    cart.forEach(
      item => (total += parseFloat((item.quantity * item.price).toFixed(2)))
    );
    return total;
  };

  if (context.cart.length === 0) return <EmptyCart />;

  return (
    <section className='cart'>
      <Link to='/products/all' className='cart__link--back'>
        <i className='fas fa-arrow-left'></i> back to products
      </Link>
      <h2 className='cart__title'>Shopping cart</h2>
      <section className='cart__content'>
        {context.cart.map(item => (
          <CartItem
            key={`${item.id}-${Math.random()}`}
            item={item}
            addProduct={context.addProduct}
            removeProduct={context.removeProduct}
          />
        ))}
      </section>
      <section className='cart_total'>
        <button
          className='cart_total__button'
          onClick={() => context.clearCart()}
        >
          Clear your shopping cart
        </button>
        <header className='cart_total__header'>
          <p className='cart_total__text'>cart total</p>
          <h2 className='cart_total__title'>${getTotalPrice(context.cart)}</h2>
        </header>
        <button className='cart_total__button--checkout'>
          Continue to checkout <i className='fas fa-arrow-right'></i>
        </button>
       
      </section>
    </section>
  );
}

export default Cart;
