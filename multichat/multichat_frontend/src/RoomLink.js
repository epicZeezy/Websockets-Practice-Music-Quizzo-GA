import React, { Component }  from "react";
import {Link} from "react-router-dom";
import ws from "./web_socket_constant";
import "./styles.css";


class RoomLink extends Component {
    // state: {
//                             ws: this.props.ws,
//                             room_id: this.props.room_id,
//                             room_name: this.props.room_name
//                         }
    constructor(props) {
        super();
        this.state = {
            joined_room: false,
            images_lst: ['https://bit.ly/3j69RCt', 'https://bit.ly/3oE7Pus', 'https://bit.ly/2L6W0iO', 'https://bit.ly/36xYdeA', 'https://bit.ly/2YA1GoG', 'https://bit.ly/3pzqGbv', 'https://bit.ly/2Mn3WNq']
        }
    }

    handleClick = (event) => {
        // Bug sending web socket msg every time for joining
        ws.send(JSON.stringify({
            "command": "join",
            "room": this.props.room_id
        }));
    }


    render() {
        const path = `/room/${this.props.room_name}`;
        let random_image = this.state.images_lst[Math.floor(Math.random()*this.state.images_lst.length)];
        return (
            <div className="room-link">
                    <Link to={{
                        pathname: path,
                        state: {
                            room_name: this.props.room_name,
                            room_id: this.props.room_id
                        }
                    }} onClick={this.handleClick}><img src={random_image} className='RoomLinkImage' alt={this.props.room_name}/></Link>
            </div>
        );
    }
}


export default RoomLink;