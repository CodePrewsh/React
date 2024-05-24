import React, { Component } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

class Rating extends Component {

  constructor(props){
    super(props);
    // Initialize state with rating from props
    this.state = {rating: this.props.rating};   
  }

  // Update rating state when a star is clicked
  handleClick(ratingValue){    
    this.setState({rating: ratingValue});
  } 

  render() { 
    return (
      <div>
        {/* Render filled or outline star based on current rating */}
        {this.state.rating >= 1 ? ( 
            <IoIosStar onClick={this.handleClick.bind(this, 1)}/>     
        ) : (         
            <IoIosStarOutline onClick={this.handleClick.bind(this, 1)}/>     
        )}     
        {this.state.rating >= 2 ? ( 
            <IoIosStar onClick={this.handleClick.bind(this, 2)}/>     
        ) : (         
            <IoIosStarOutline onClick={this.handleClick.bind(this, 2)}/>     
        )} 
        {this.state.rating >= 3 ? ( 
            <IoIosStar onClick={this.handleClick.bind(this, 3)}/>     
        ) : (         
            <IoIosStarOutline onClick={this.handleClick.bind(this, 3)}/>     
        )} 
        {this.state.rating >= 4 ? ( 
            <IoIosStar onClick={this.handleClick.bind(this, 4)}/>     
        ) : (         
            <IoIosStarOutline onClick={this.handleClick.bind(this, 4)}/>     
        )} 
        {this.state.rating >= 5 ? ( 
            <IoIosStar onClick={this.handleClick.bind(this, 5)}/>     
        ) : (         
            <IoIosStarOutline onClick={this.handleClick.bind(this, 5)}/>     
        )}     

        {/* Display current rating */}
        <h1>Rating: {this.props.rating}</h1>                                                                                                                         
      </div>
    );
  }
}

export default Rating;
