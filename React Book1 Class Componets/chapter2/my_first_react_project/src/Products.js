import React, { Component } from 'react';

class Products extends Component {
  
  render() {
    const products = ["Learning React","Getting on React","Beginning React","learning Componets"];
    const listProducts = products.map((product) =>
    //  declare an array products in Products Component which contains the names of the
    // products that we are listing.

        <li key={product.toString()}>{product}</li>
    );
// A "key" is a special string attribute you need
// to include when creating lists of element

    return (
      <div>
        <ul>{listProducts}</ul>     
      </div>
    );
  }
}

export default Products;


