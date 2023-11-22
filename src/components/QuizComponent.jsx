import React, { Component } from "react";
import "../css/QuizComponent.css";
import questions from "./quizQuestion.json";

export default class QuizComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      questions:questions,
      currentQuestion:{},
      nextQuestion:{},
      prevQuestion:{},
      currentQuestionIndex:0,
    }
  }
  componentDidMount(){
    this.displayQuestion(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.prevQuestion);
  }

  displayQuestion = (questions=this.state.questions, currentQuestion, nextQuestion, prevQuestion)=>{
    let {currentQuestionIndex} = this.state;
    if(this.state.questions.length!==0){
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex+1];
      prevQuestion = questions[currentQuestionIndex-1];

      this.setState({
        currentQuestion,
        nextQuestion,
        prevQuestion,
      })
    }
  }

  handleNextButtonClick = ()=>{
    if(this.state.nextQuestion!==undefined){
      this.setState(prevState=>({
        currentQuestionIndex:prevState.currentQuestionIndex+1
      }),()=>{
        this.displayQuestion(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.prevQuestion)
      })
    }
  }

  handlePrevButtonClick = ()=>{
    if(this.state.prevQuestion!==undefined){
      this.setState(prevState=>({
        currentQuestionIndex:prevState.currentQuestionIndex-1
      }),()=>{
        this.displayQuestion(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.prevQuestion)
      })
    }
  }

  handleQuitButtonClick = ()=>{
    
    if(window.confirm("Are you sure you want to quit?")){
      window.location.reload(false)
    }
  }

  render(){
    const {currentQuestion} = this.state;
    return(
      <div className="QUE">
        <h2>Question</h2>

        <div>
          <span>1 of 15</span>
          <h5>{currentQuestion.question}</h5>
        </div>

        <div className="CONTAINER">
          <p className="OPTN">{currentQuestion.optionA}</p>
          <p className="OPTN">{currentQuestion.optionB}</p>
        </div>

        <div className="CONTAINER">
          <p className="OPTN">{currentQuestion.optionC}</p>
          <p className="OPTN">{currentQuestion.optionD}</p>
        </div>

        <div className="BTN-CONTAINER">
          <button className="button PREV" onClick={this.handlePrevButtonClick}>Previous</button>
          <button className="button NEXT" onClick={this.handleNextButtonClick}>Next</button>
          <button className="button QUIT" onClick={this.handleQuitButtonClick}>Quit</button>
        </div>
      </div>
    )
  }
}