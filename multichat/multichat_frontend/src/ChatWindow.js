import React, { Component } from "react";
import SendMessageForm from "./SendMessageForm";
import MessagesPresentation from "./MessagesPresentation";
import ws from "./web_socket_constant";

class ChatWindow extends Component {
    constructor(props) {
        super();
        this.state = {
            messages_array: []
        };
    }

      componentDidMount() {
        ws.onmessage = event => {
            const data = JSON.parse(event.data)
            if (data.error) {
                alert(data.error);
                return;
            }
            console.log(data)
            if (data.join){
                console.log("Joining room " + data.title)
            } else if (data.msg_type === 4){
                this.state.messages_array.push({
                    "username":data.username,
                    "message_content":data.username + " Joined",
                    "message_type": data.msg_type})
            } else if (data.message || data.msg_type !== 0) {
                // {msg_type: 0, room: 4, username: "root", message: "Hey hey"}
                let message_added = this.state.messages_array.concat({
                    "username": data.username,
                    "message_content": data.message,
                    "message_type": data.msg_type})
                this.setState({messages_array: message_added})

                // console.log(this.state.messages_array)
            }

            }
        }


    // Need to take in ws props
    // When onmessage; If message is
    //title, message array presentation, send
    render() {
        return(
            <div className='ChatWindow'>
                <MessagesPresentation messages_array={this.state.messages_array} />
                <SendMessageForm ws={ws} room_id={this.props.room_id} room_name={this.props.room_name}/>
            </div>
        )

    }

}

export default ChatWindow;
