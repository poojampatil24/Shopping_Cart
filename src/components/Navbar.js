import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cart }) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (cart.length !== 0) {
      let qty = 0;
      cart.forEach(item => (qty += item.quantity));
      setQuantity(qty);
    }
  }, [cart]);

  return (
    <nav className='nav'>
      <Link to='/' className='nav__link--brand'>
        HeyGirl
      </Link>
      <Link to='/cart' className='nav__link'>
        <i className='fas fa-shopping-bag'></i>
        {quantity !== 0 ? (
          <span className='nav__link--qty'>{quantity}</span>
        ) : null}
      </Link>
    </nav>
  );
}

export default React.memo(Navbar);
