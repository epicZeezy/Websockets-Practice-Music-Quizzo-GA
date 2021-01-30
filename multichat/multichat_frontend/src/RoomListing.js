import React, { Component } from "react";
import TitlebarGridList from "./Cards";


class RoomListing extends Component {
    state = {
        room_name_id_pairings: []
    }

    componentDidMount() {
        fetch('http://localhost:8000/get-rooms/')
            .then((res) => {
                console.log("Response", res)
                return res.json();
            })
            .then((json) => {
                this.setState({room_name_id_pairings: json.data})
            })
            .catch((err) => {
                console.log("error getting rooms", err);
            });

    }


        render()
        {
            const room_name_id_pairings = this.state.room_name_id_pairings;
            const length = room_name_id_pairings.length;
            console.log(room_name_id_pairings)
            if (!length) {
                return (
                    <div>
                        <p>No chat rooms created. Maybe you should create some</p>
                    </div>

                )
            } else {
                return (
                    <div>
                        <h1>Available Chat Rooms Below</h1>
                            <TitlebarGridList ws={this.props.ws} room_name_id_pairings={room_name_id_pairings} />
                    </div>
                )
            }
        }

    }


export default RoomListing;
