import React from 'react';

function Products() {
    // Array of product names
    const products = ["Learning React","Pro React","Beginning React"];
    
    // Mapping through the array of products and creating list items
    const listProducts = products.map((product) => 
        <li key={product.toString()}>{product}</li>
    );
  
    // Rendering the list of products
    return (
      <div>
          <ul>{listProducts}</ul>     
      </div>
    );
}

export default Products;
