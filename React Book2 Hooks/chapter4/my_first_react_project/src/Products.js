import React from 'react';
import Product from './Product'; // Importing the Product component

function Products() {
    // Function to get product data
    const getProducts = () => {
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

    // Get product data
    const products = getProducts();

    // Map through products array and create Product components
    const listProducts = products.map((product) => 
        <Product key={product.productName} data={product} />
    );    
  
    return (
      <div>
          <ul>{listProducts}</ul>     {/* Render the list of products */}
      </div>
    );
}

export default Products;
