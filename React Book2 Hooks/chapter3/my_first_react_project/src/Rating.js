import React, { useState } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

const Rating = (props) => {
  // Initialize state with rating from props
  const [rating, setRating] = useState(props.rating);

  // Update rating state when a star is clicked
  const handleClick = (ratingValue) => {
    setRating(ratingValue);
  };

  return (
    <div>
      {/* Render filled or outline star based on current rating */}
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value}>
          {rating >= value ? (
            <IoIosStar onClick={() => handleClick(value)} />
          ) : (
            <IoIosStarOutline onClick={() => handleClick(value)} />
          )}
        </span>
      ))}

      {/* Display current rating */}
      <h1>Rating: {rating}</h1>
    </div>
  );
};

export default Rating;

const styles={
    starStyle:{
    color: 'orange' 
    }
   }
