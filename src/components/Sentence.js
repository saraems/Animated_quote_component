import React, { Component } from 'react';
import './Sentence.css'



class Sentence extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr: this.props.sentences,
            time: this.props.time,
            fullSentence: "",
            letterByLetter: ""
        }
    }

    async componentDidMount() {

        this.waitForLetter = async function wait() {
            return new Promise((resolve) => {
                setTimeout(resolve, this.state.time);
            });
        };

        this.waitForSentence = async function wait() {
            return new Promise(function(resolve) {
                setTimeout(resolve, 2000);
            });
        };

        this.loop = async function count() {
            while(true) {
                for (let i = 0; i < this.state.arr.length; i++) {
                    this.setState({
                        fullSentence: this.state.arr[i]
                    });
                    console.log(this.state.arr[i]);
                    let sentence = this.state.arr[i];
                    for (let j = 0; j < this.state.arr[i].length; j++) {
                        await this.waitForLetter();
                        console.log(sentence[j]);
                        this.setState({
                            letterByLetter: this.state.letterByLetter += sentence[j]
                        })
                    }
                    await this.waitForSentence();
                    this.setState({
                        letterByLetter: ""
                    })
                }
            }
        };

        this.loop()
    }

    render() {
        return (
            <div className='sentence_container'>
                <h1>{ this.state.fullSentence }</h1>
                <p>{ this.state.letterByLetter }</p>
            </div>
        );
    }
}

export default Sentence;
