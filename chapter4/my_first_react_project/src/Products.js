// Importing necessary modules from React library
import React, { Component } from 'react';

// Importing the Product component from './Product' file
import Product from './Product';

// Defining the Products component
class Products extends Component {
    // Initializing products data
    products;

    constructor(props){
        super(props);
        // Initializing products data by calling getProducts() method
        this.products = this.getProducts();
    }

    // Method to get list of products
    getProducts() {
        return [
            { 
                imageUrl: "http://loremflickr.com/150/150?random=1",
                productName: "Product 1",
                releasedDate: "May 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
                rating: 4,
                numOfReviews: 2
            },
            { 
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releasedDate: "October 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
                rating: 2,
                numOfReviews: 12          
            },
            { 
                imageUrl: "http://loremflickr.com/150/150?random=3",
                productName: "Product 3",
                releasedDate: "July 30, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
                rating: 5,
                numOfReviews: 2
            }
        ];
    }    
    
    // Rendering the Products component
    render() {    
        // Mapping through products array and creating a Product component for each product
        const listProducts = this.products.map((product) => 
            <Product key={product.productName} data={product} />
        );

        // Rendering the list of products
        return (
            <div>
                <ul>{listProducts}</ul>     
            </div>
        );
    }
}

// Exporting the Products component to be used in other files
export default Products;
