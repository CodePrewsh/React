import React, { Component } from 'react';

class Products extends Component {
  
  render() {
    const products = ["Learning React","Getting on React","Beginning React","learning Componets"];
    const listProducts = products.map((product) => 
        <li key={product.toString()}>{product}</li>
    );

    return (
      <div>
        <ul>{listProducts}</ul>     
      </div>
    );
  }
}

export default Products;


