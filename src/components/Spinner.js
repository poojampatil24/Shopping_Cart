import React from 'react';

function Spinner() {
  return (
    <section className='spinner'>
      <section className='loader'>
        <span className='loader_item'></span>
        <span className='loader_item'></span>
        <span className='loader_item'></span>
      </section>
    </section>
  );
}

export default Spinner;
