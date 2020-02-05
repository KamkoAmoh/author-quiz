import { shuffle, sample} from 'underscore';
import '../index.css';

const getTurnData = (authors) => {
  const allBooks = authors.reduce((p, c) => {
    return p.concat(c.books);
  }, []);

  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author) => author.books.some((title) => title === answer))
  }
}

export default getTurnData;
