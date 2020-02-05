import React from 'react';
import Book from './Display.Book';
import '../../../AuthorQuiz.css';

const Turn = ({author, books, highlight, onAnswerSelected}) => {
  const highlightToBackgroundColor = {
    'none': '',
   'correct': 'lightGreen',
    'wrong': 'pink'
  }
  return (
    <div className="turn__content" style={{backgroundColor: highlightToBackgroundColor[highlight] }}>
      <div className="turn_image">
        <img src={author.imageUrl} className="authorimage" alt="Author"/>
      </div>
      <div className="turn__answer__row">
        {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected}/>)}
      </div>
    </div>
 );
};

export default Turn;
