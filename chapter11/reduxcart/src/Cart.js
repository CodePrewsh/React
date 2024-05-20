import React, { Component } from "react";
import AddProduct from "./AddProduct";
import { Table } from "reactstrap";

class Cart extends Component {
  render() {
    return (
      <div className="container">
        {/* Render the AddProduct component and pass the onAddProduct function as a prop */}
        <AddProduct addProduct={this.props.onAddProduct} />
        {/* Render a table to display the products */}
        <Table>
          <thead>
            <tr>
              {/* Table headers */}
              <th>Product Name</th>
              <th>Product Price</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through the productCart array in props and render each product */}
            {this.props.productCart.map((productData) => (
              <tr key={productData.productName}>
                {/* Display product name */}
                <td>{productData.productName}</td>
                {/* Display product price */}
                <td>{productData.productPrice}</td>
                {/* Add a remove button that triggers onDeleteProduct function */}
                <td onClick={() => this.props.onDeleteProduct(productData)}>
                  Remove
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* Display the total cost */}
        <span>Total Amount: {this.props.totalCost}</span>
      </div>
    );
  }
}

export default Cart;
