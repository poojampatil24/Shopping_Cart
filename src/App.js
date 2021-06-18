import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.querySelector('.scroll_up').style.transform =
        window.pageYOffset >= 240 ? 'translateX(0px)' : 'translateX(100px)';
    });
  }, []);

  const scrollUp = () => window.scroll({ left: 0, top: 0, behavior: 'smooth' });

  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products/:category' component={Products} />
        <Route exact path='/product/:id' component={Product} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
      <i className='scroll_up fas fa-angle-up' onClick={scrollUp}></i>
    </React.Fragment>
  );
}

export default App;
