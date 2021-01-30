import React from "react";
import Room from "./Room";

export default function RoomIntermediate(props) {

    return(
        <div>
            <Room room_name={props.location.state.room_name} room_id={props.location.state.room_id} />
        </div>
    )
}
