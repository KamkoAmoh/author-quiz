import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Hero, Continue, Footer, Turn} from './components/display/Display.Components';
import './AuthorQuiz.css';

const mapStateToProps = (state) => {
  return {
    turnData: state.turnData,
    highlight: state.highlight
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAnswerSelected: (answer) => {
      dispatch({ type: 'ANSWER_SELECTED', answer });
    },
    onContinue: () => {
      dispatch({ type: 'CONTINUE' });
    }
  };
}

const AuthorQuiz = connect(mapStateToProps, mapDispatchToProps)(({ turnData, highlight, onAnswerSelected, onContinue}) => {
  return (
    <div className="container">
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
      <Continue show={highlight === 'correct'} onContinue={onContinue} />
      <p className="add__author"><Link to="/add">Add an Author</Link></p>
      <Footer />
    </div>
  );
});

export default AuthorQuiz;
