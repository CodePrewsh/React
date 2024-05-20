const Product = (props) => {
  return (
    <div> 
     {/* Media component for displaying product details */}
     <Media>
          {/* Product image */}
          <img 
              width={64} 
              height={64} 
              className="mr-3"
              src={props.data.imageUrl} 
              alt="Image"
          />
        <Media.Body>
          {/* Product name */}
          <h5>{props.data.productName}</h5>
          {/* Product release date */}
          { props.data.releasedDate }
          {/* Rating component */}
          <Rating 
              rating={props.data.rating} numOfReviews={props.data.numOfReviews}
          />
          {/* Product description */}
          <p>{props.data.description}</p>
        </Media.Body>
      </Media>                                                                                                                                   
    </div>
  );
}
