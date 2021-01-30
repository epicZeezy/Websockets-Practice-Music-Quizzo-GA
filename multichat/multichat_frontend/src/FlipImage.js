// You can live edit this code below the import statements
import React from 'react';
import Flip from 'react-reveal/Flip';
import {Link} from "react-router-dom";

class FlipImage extends React.Component {
    constructor(props) {
        super();
    }
  render() {
    return (
      <div>
        <Flip left>
            <img src={this.props.image} className='RoomImage' alt="Practice"/>
        </Flip>
      </div>
    );
  }
}

export default FlipImage;