import React from 'react';

function CartItem({ item, addProduct, removeProduct }) {
  return (
    <section className='cart_item'>
      <img
        src={`${item.image_link}`}
        alt={`${item.name}`}
        className='cart_item__image'
      />
      <section className='cart_item__name'>
        <h4 className='cart_item__title'>{item.name}</h4>
        {item.color ? (
          <p className='cart_item__text'>color: {item.color}</p>
        ) : null}
      </section>
      <section className='cart_item__price--desktop'>
        <p className='cart_item__text'>${item.price}</p>
        <section className='cart_quantity'>
          <button
            className='cart_quantity__button'
            onClick={() => removeProduct(item.id, item.color)}
          >
            -
          </button>
          <span className='cart_quantity__value'>{item.quantity}</span>
          <button
            className='cart_quantity__button'
            onClick={() => addProduct(item, item.color)}
          >
            +
          </button>
        </section>
        <h4 className='cart_item__title'>
          Total ${(item.price * item.quantity).toFixed(2)}
        </h4>
      </section>
    </section>
  );
}

export default React.memo(CartItem);
