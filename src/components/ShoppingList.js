import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selecterCategory, setSelectedCategory] = useState('All')
  const foodToDisplay = items.filter(item => {
    if(selecterCategory === 'All') {
      return true
    } else {
      return item.category === selecterCategory
    }
  })

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
