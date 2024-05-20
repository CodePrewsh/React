// Reducer function to manage state updates for the cart
function cartReducer(state, action) {
    // Initial state if state is undefined
    if (state === undefined) {
        return {
            totalCost: 0,
            productCart: []
        };
    }
    
    // Switch statement to handle different action types
    switch (action.type) {
        // Action type to add a product to the cart
        case "addProduct": 
            return {
                // Spread operator to maintain immutability
                ...state,
                // Update totalCost by adding the product price
                totalCost: state.totalCost + parseInt(action.productData.productPrice),
                // Add the product to the productCart array
                productCart: state.productCart.concat({
                    productName: action.productData.productName,
                    productPrice: action.productData.productPrice
                })
            } 
        // Action type to delete a product from the cart
        case "deleteProduct": 
            // Filter out the deleted product from the productCart array
            const updatedArray = state.productCart.filter(product =>
                product.productName !== action.productData.productName
            );
            return {
                // Spread operator to maintain immutability
                ...state,
                // Update totalCost by subtracting the product price
                totalCost: state.totalCost - parseInt(action.productData.productPrice),
                // Update productCart with the filtered array
                productCart: updatedArray
            } 
        default:
            // Return current state if action type is not recognized
            return state;
    }
}

export default cartReducer;
