import { connect } from "react-redux";
import Cart from "./Cart";

// mapStateToProps function maps the Redux state to props
function mapStateToProps(state) {
  return {
    // Mapping totalCost from Redux state to props
    totalCost: state.totalCost,
    // Mapping productCart from Redux state to props
    productCart: state.productCart,
  };
}

// mapDispatchToProps function maps dispatch functions to props
function mapDispatchToProps(dispatch) {
  return {
    // Dispatch action to add a product
    onAddProduct: (productName, productPrice) =>
      dispatch({
        type: "addProduct",
        productData: {
          productName: productName,
          productPrice: productPrice,
        },
      }),
    // Dispatch action to delete a product
    onDeleteProduct: (productData) =>
      dispatch({
        type: "deleteProduct",
        productData: productData,
      }),
  };
}

// Connects the Cart component to the Redux store
var connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default connectedComponent;
