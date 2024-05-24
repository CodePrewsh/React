// Importing necessary modules from React library
import React, { Component } from 'react';

// Importing the Rating component from './Rating' file
import Rating from './Rating';

// Importing the Media component from 'react-bootstrap'
import { Media } from 'react-bootstrap';

// Defining the Product component
class Product extends Component {
  constructor(props){
    super(props);
    // Initializing the component with props
  }

  // Rendering the Product component
  render() { 
    return (
      <div>                
        {/* Using Media component to display product information */}
        <Media>
            {/* Displaying product image */}
            <img 
                width={64} 
                height={64} 
                className="mr-3"
                src={this.props.data.imageUrl} 
                alt="Image"
            />
            {/* Media body containing product details */}
            <Media.Body>
                {/* Displaying product name */}
                <h5>{this.props.data.productName}</h5>
                {/* Displaying product release date */}
                { this.props.data.releasedDate }
                {/* Using Rating component to display product rating */}
                <Rating rating={this.props.data.rating} numOfReviews={this.props.data.numOfReviews}/>
                {/* Displaying product description */}
                <p>{this.props.data.description}</p>
            </Media.Body>
        </Media>                                                                                                                                   
      </div>
    );
  }
}

// Exporting the Product component to be used in other files
export default Product;
