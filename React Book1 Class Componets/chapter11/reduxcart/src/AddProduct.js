import React, { Component } from "react";

class AddProduct extends Component {
  state = {
    // State to manage the input value for product name
    productName: "",
    // State to manage the input value for product price
    productPrice: 0,
  };

  // Handler function to update state when product name input changes
  productNameChangedHandler = (event) => {
    this.setState({ productName: event.target.value });
  };

  // Handler function to update state when product price input changes
  productPriceChangedHandler = (event) => {
    this.setState({ productPrice: event.target.value });
  };

  render() {
    return (
      <div className="container">
        {/* Input field for product name */}
        <input
          type="text"
          placeholder="Product Name"
          onChange={this.productNameChangedHandler}
          value={this.state.productName}
        />
        {/* Input field for product price */}
        <input
          type="number"
          placeholder="Product Price"
          onChange={this.productPriceChangedHandler}
          value={this.state.productPrice}
        />
        {/* Button to add the product */}
        <button
          className="buttons"
          onClick={() => {
            // Call the addProduct function passed from parent component
            this.props.addProduct(
              this.state.productName,
              this.state.productPrice
            );
          }}
        >
          Add Product
        </button>
      </div>
    );
  }
}

export default AddProduct;
