import React from "react";
import Message, {MessageMuted} from "./Message";

function MessagesPresentation(props) {
    // Do map for all messages and present them
    const all_messages = props.messages_array.map((message) => {
        let message_type = message.message_type;
        if (message_type === 0) {
            return (
                <Message
                    username={message.username}
                    message_content={message.message_content}
                    key={(message.username, message.message_content)}
                />
            );
        } else if (message_type === 4) {
            return (
                <MessageMuted username={message.username}
                              message_content={message.message_content}
                              key={(message.username, message_type, message.message_content)}
                />
            );
        } else if (message_type === 5) {
            return (
                <MessageMuted username={message.username}
                              message_content="Left"
                              key={(message.username, message_type, "left")}
                />
            );
        } else {
            return (
                <p>Failed Message</p>
            )
        }
    });

    return(
        <div className="messages">
            {all_messages}
        </div>
    )
}

export default MessagesPresentation;