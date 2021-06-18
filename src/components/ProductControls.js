import React from 'react';

function ProductControls({ price, addToCart }) {
  return (
    <section className='product_controls'>
      <h4 className='product_controls__price'>${price}</h4>
      <button className='product_controls__button' onClick={addToCart}>
        add
      </button>
    </section>
  );
}

export default React.memo(ProductControls);
