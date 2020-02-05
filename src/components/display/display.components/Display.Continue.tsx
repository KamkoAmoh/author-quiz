import React from 'react';
import '../../../AuthorQuiz.css';
import '../../../bootstrap.min.css';

const Continue = ({ show, onContinue }) => {
  return (
    <div className="continue">
      { show ?
        <div className="col-11">
          <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
        </div>
        : null
      }
    </div>
  );
};

export default Continue;
