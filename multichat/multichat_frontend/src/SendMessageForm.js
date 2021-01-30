import React, { Component } from "react";

class SendMessageForm extends Component {
    constructor(props) {
        super();
        this.state = {
            current_message: ""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        this.props.ws.send(JSON.stringify({
                            "command": "send",
                            "room": this.props.room_id,
                            "message": this.state.current_message
                        }));
        this.setState({current_message: ""})
  };

    handleChange = (event) => {
        this.setState({ current_message: String(event.target.value) });
    }

    render() {
        return(
            <div className='SendMessageForm'>
                <form onSubmit={this.handleSubmit} id="message-send">
                    <label>
                        <input type="text"
                               id="mesage-input"
                               onChange={this.handleChange}
                               value={this.state.current_message}/>
                    </label>
                    <input type="submit" value="Send" />
                </form>
            </div>
        )

    }

}

export default SendMessageForm;
