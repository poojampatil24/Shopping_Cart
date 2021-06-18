import React from 'react';

function SelectCategories({ categories, activeCategory, changeCategory }) {
  return (
    <select
      onChange={e => changeCategory(e.target.value)}
      value={activeCategory}
      className='select_categories'
    >
      <option value='all'>all</option>
      {categories.map(category => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default React.memo(SelectCategories);
