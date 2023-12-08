import React from 'react';
import quizPageStyle from '../QuizPageStyle';

import my_state from './my_state';
//import './my_state';

//import  my_questions from 'data/basic_questions.json';

const my_questions = 
[{
    id: 1,
    question: "Who was the first President of the United States?",
    answers: [{ answer: "George Washington", isCorrect: true }, { answer: "Thomas Jefferson", isCorrect: false }, { answer: "Abraham Lincoln", isCorrect: false }, { answer: "John Adams", isCorrect: false }]
  },
  {
    id: 2,
    question: "In which year did the Titanic sink?",
    answers: [{ answer: "1912", isCorrect: true }, { answer: "1910", isCorrect: false }, { answer: "1905", isCorrect: false }, { answer: "1920", isCorrect: false }]
  },
  {
    id: 3,
    question: "What ancient civilization built the Machu Picchu complex in Peru?",
    answers: [{ answer: "The Inca Empire", isCorrect: true }, { answer: "The Maya", isCorrect: false }, { answer: "The Aztecs", isCorrect: false }, { answer: "The Romans", isCorrect: false }]
  },
  {
    id: 4,
    question: "Which war was fought between the North and the South regions in the United States?",
    answers: [{ answer: "The American Civil War", isCorrect: true }, { answer: "The Revolutionary War", isCorrect: false }, { answer: "World War I", isCorrect: false }, { answer: "The War of 1812", isCorrect: false }]
  },
  {
    id: 5,
    question: "Who was the first woman to win a Nobel Prize, and in what year?",
    answers: [{ answer: "Marie Curie, 1903", isCorrect: true }, { answer: "Rosalind Franklin, 1958", isCorrect: false }, { answer: "Ada Lovelace, 1852", isCorrect: false }, { answer: "Dorothy Hodgkin, 1964", isCorrect: false }]
  },
  {
    id: 6,
    question: "What is the largest country in the world by area?",
    answers: [{ answer: "Russia", isCorrect: true }, { answer: "Canada", isCorrect: false }, { answer: "China", isCorrect: false }, { answer: "United States", isCorrect: false }]
  },
  {
    id: 7,
    question: "Which river is the longest in the world?",
    answers: [{ answer: "The Nile River", isCorrect: true }, { answer: "The Amazon River", isCorrect: false }, { answer: "The Yangtze River", isCorrect: false }, { answer: "The Mississippi River", isCorrect: false }]
  },
  {
    id: 8,
    question: "Name the smallest country in the world.",
    answers: [{ answer: "Vatican City", isCorrect: true }, { answer: "Monaco", isCorrect: false }, { answer: "Nauru", isCorrect: false }, { answer: "Liechtenstein", isCorrect: false }]
  },
  {
    id: 9,
    question: "What is the capital of Australia?",
    answers: [{ answer: "Canberra", isCorrect: true }, { answer: "Sydney", isCorrect: false }, { answer: "Melbourne", isCorrect: false }, { answer: "Perth", isCorrect: false }]
  },
  {
    id: 10,
    question: "In which continent is the Sahara Desert located?",
    answers: [{ answer: "Africa", isCorrect: true }, { answer: "Asia", isCorrect: false }, { answer: "Australia", isCorrect: false }, { answer: "South America", isCorrect: false }]
  }
  
];


class Quiz extends React.Component {

    state = {
        score: 0,
        count: 0
    };
    
    incrementScore = () => {
        this.setState({
            score: this.state.score + 1
        });
        this.setState({
            count: this.state.count + 1
        });
        alert("You are correct!"); // could be executed before the setStates are done!
    };

    dontIncrementScore = () => {
       this.setState({
            count: this.state.count + 1
        });
        alert("Sorry - not correct");
    };

    handleSubmit = () => {
        my_state.my_score = this.state.score;
        my_state.my_count = this.state.count;
        
        alert("Total score: " + this.state.score + "/" + this.state.count);
    }
    
    render() {
        return(
           <div style={quizPageStyle}>
            <h1>{this.props.q_prop}</h1>
            <h1>My Questions</h1>
                {my_questions.map((quest) => (
                <div> 
                    <h2>{quest["question"]}</h2>
                        {quest["answers"].map((ans) => (
                            <div>
                                <label>
                                <input  
                                        type = "radio"
                                        name = { quest["id"] }
                                        key = { quest["id"] }
                                        onClick = { ans["isCorrect"] ? this.incrementScore : this.dontIncrementScore }
                                        value = { ans["isCorrect"] } /> 
                                    { ans["answer"] }
                                </label> 
                                <br />
                            </div>
                        ))}
                    
                </div>
                ))}
                 <br />
                <button onClick={this.handleSubmit} >Submit</button>
        </div>
        );
    }
}

export default Quiz;