import React, { Component } from "react";
import RoomListing from "./RoomListing";
import ws from "./web_socket_constant";

class Home extends Component {
    render() {

        return (
            <div>
                <div className="span7"><h3>What's this?</h3><p>A multiplayer a competitive music guessing quiz!</p></div>
                <div className="span9"><h3>How to play?</h3><p> Pick an available room below for a specific genre and then
                you can start playing a music guessing quiz!</p></div>
                <RoomListing ws={ws}/>
            </div>
        )
    }
}

export default Home;
