import React, { useState } from 'react';
import './filter.css';

const ProductFilter = ({ products, setProducts }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSortChange = (e) => {
    setSelectedOption(e.target.value);

    if (e.target.value === 'ascending') {
      sortProductsByPrice('ascending');
    } else if (e.target.value === 'descending') {
      sortProductsByPrice('descending');
    }
  };

  const sortProductsByPrice = (order) => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);

      if (order === 'ascending') {
        return priceA - priceB;
      } else if (order === 'descending') {
        return priceB - priceA;
      }
    });

    setProducts(sortedProducts);
  };

  return (
    <div className="product-filter">
      <label htmlFor="sortSelect" className='filter-txt'>Sort By Price:</label>
      <select id="sortSelect" value={selectedOption} onChange={handleSortChange}>
        <option value="">-- Select --</option>
        <option value="ascending">low to high</option>
        <option value="descending">high to low</option>
      </select>
    </div>
  );
};

export default ProductFilter;
