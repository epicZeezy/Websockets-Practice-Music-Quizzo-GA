import React from "react";

function Message(props) {
    // Maybe add time and color as well to props
    // Can maybe have this use a random color
    return(
        <div className='message'>
            <span className='username'> {props.username + ": "} </span>
            <span className='message_contents'>  {props.message_content}  </span>
        </div>
    )
}

export function MessageMuted(props) {
        return(
            <div className='muted-message text-muted'>
                {props.username + " " + props.message_content}
            </div>
            )

}

export default Message;
