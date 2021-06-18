import React, { useContext, useState, useEffect } from 'react';
import ShopContext from '../context/shopContext';

import ProductControls from '../components/ProductControls';
//import ProductColors from '../components/ProductColors';
import Spinner from '../components/Spinner';
import Navbar from '../components/Navbar';

function ProductItem(props) {
  const [product, setProduct] = useState({});
  const [color, setColor] = useState(false);
  const context = useContext(ShopContext);

  useEffect(() => {
    const id = props.match.params.id;
    if (context.products.length !== 0) {
      const productItem = {
        ...context.products.find(item => item.id === parseInt(id))
      };
      setProduct(productItem);
      if (productItem.product_colors.length !== 0)
        setColor(productItem.product_colors[0]);
    }
  }, [props.match.params.id, context.products]);

  const addToCart = () => {
    const statement = document.querySelector('.statement');
    if (color && color.colour_name) {
      context.addProduct(product, color.colour_name);
    } else {
      context.addProduct(product);
    }

    statement.classList.add('statement--active');
    setTimeout(() => statement.classList.remove('statement--active'), 2000);
  };

  const handleClick = e => {
    e.preventDefault();
    props.history.goBack();
  };

  const getDescription = desc => {
    const index = desc.slice(0, 500).lastIndexOf('.');
    return desc.slice(0, index + 1);
  };

  if (Object.keys(product).length === 0) return <Spinner />;

  return (
    <React.Fragment>
      <p className='statement'>Product added to your basket.</p>
      <Navbar cart={context.cart} />
      <section className='product'>
        <img
          className='product__image'
          src={`${product.image_link}`}
          alt={`${product.name}`}
        />
        <section className='product__content'>
          <button onClick={handleClick} className='product__link--back'>
            <i className='fas fa-arrow-left'></i> back
          </button>
          <h2 className='product__title'>{product.name}</h2>
          <p className='product__description'>
            {getDescription(product.description)}
          </p>
          
          <ProductControls price={product.price} addToCart={addToCart} />
        </section>
      </section>
      <span className='title__background title__background--left'>
        SMASHBOX
      </span>
    </React.Fragment>
  );
}

export default ProductItem;
