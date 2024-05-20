import React from 'react';

function Products() {
    // Array of product names
    const products = ["Learning React","Pro React","Beginning React"];
    
    // Mapping through the array of products and creating list items
    const listProducts = products.map((product) => 
        <li key={product.toString()}>{product}</li> // Each product item with a unique key
    );
  
    // Rendering the list of products within an unordered list
    return (
      <div>
          <ul>{listProducts}</ul>     {/* Render the list of products */}
      </div>
    );
}

export default Products;
