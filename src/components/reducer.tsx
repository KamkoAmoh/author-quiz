import '../index.css';
import getTurnData from './getTurnData';
import authors from '../data/Data.authors';

const reducer = (state = {authors, turnData: getTurnData(authors), highlight: '' }, action) => {
  switch (action.type) {
    case 'ANSWER_SELECTED':
      const isCorrect = state.turnData.author.books.some((book) => book === action.answer);
      return Object.assign({}, state, { highlight: isCorrect ? 'correct' : 'wrong' });
    case 'CONTINUE':
      return Object.assign({}, state, { highlight: '', turnData: getTurnData(state.authors) });
    case 'ADD_AUTHOR':
      return Object.assign({}, state, { authors: state.authors.concat([action.author])});
    default:
      return state;
  };
};

export default reducer;