import React, { Component } from "react";
import ChatWindow from "./ChatWindow";
import ws from "./web_socket_constant";
import "./styles.css";
import FlipImage from "./FlipImage";
// import { createMuiTheme, ThemeProvider } from '@material-ui/core';
// import AudioPlayer from 'material-ui-audio-player';

class Room extends Component {
    constructor(props) {
        super();
        this.state = {
            quiz_questions: null,
            current_index: 0,
            current_question: null,
            current_answer: null,
            current_image_for_answer: null,
            current_guess: "",
            flip_image: false,
            number_correct: 0
        }
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            fetch('http://localhost:8000/generate-quiz/1ctP63MYjVwJEKl0yizN8B/')
                .then((res) => {
                    console.log("Response", res)
                    return res.json();
                })
                .then((json) => {
                    this.setState({
                        quiz_questions: json.data,
                        current_question: json.data[0].preview_question,
                        current_answer: json.data[0].answer,
                        current_image_for_answer: json.data[0].image
                    })
                })
                .catch((err) => {
                    console.log("error getting quiz questions", err);
                });
        })
        this.setState({ loading: false })
    }

    // get_current_question = (event) => {
    //     console.log(this.state.quiz_questions[this.state.current_index])
    //     const current_song = this.state.quiz_questions[this.state.current_index].preview_question;
    //     return current_song;
    //
    // }


    handleClickAndReveal = (event) => {
        console.log("Hello")

    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({ current_guess: String(event.target.value) });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.current_guess === this.state.current_answer){
            this.setState({
                current_index: this.state.current_index + 1})
            this.setState({
                current_guess:"",
                    current_question:this.state.quiz_questions[this.state.current_index].preview_question,
                    current_answer: this.state.quiz_questions[this.state.current_index].answer,
                    current_image_for_answer: this.state.quiz_questions[this.state.current_index].image,
                    number_correct: this.state.number_correct + 1})
            alert("You got it correct!");
        } else{
            alert("You got it wrong. Close this and we'll reveal the correct answer");
            this.setState({
                flip_image: true})
            setTimeout(() => {  this.setState({flip_image: false}); }, 1000);
        }
    }

    playNext = (event) => {
        this.setState({
                current_index: this.state.current_index + 1})
        this.setState({
                current_guess:"",
                    current_question:this.state.quiz_questions[this.state.current_index].preview_question,
                    current_answer: this.state.quiz_questions[this.state.current_index].answer,
                    current_image_for_answer: this.state.quiz_questions[this.state.current_index].image})
    }


    render() {
        return(
            <div>
                <h1>{this.props.room_name}</h1>
                {this.state.flip_image ? <FlipImage image={this.state.current_image_for_answer}/> : <div> </div>}
                <audio controls src={this.state.current_question} autoPlay={true} onEnded={this.playNext}> </audio>
                <form onSubmit={this.handleSubmit} id="submit-answer">
                    <label>
                        <input type="text"
                               id="answer-input"
                               onChange={this.handleChange}
                               value={this.state.current_guess}/>
                    </label>
                    <input type="submit" value="Submit Answer" />
                </form>
                <h2 id="score">Number Correct {this.state.number_correct}</h2>
                <ChatWindow ws={ws}
                            room_id={this.props.room_id}
                            room_name={this.props.room_name}/>
            </div>
        )

    }

}

export default Room;
