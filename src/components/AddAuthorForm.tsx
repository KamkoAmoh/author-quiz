import React, { useState } from 'react';
import './style/AddAuthorForm.css';
import postData from '../server/request/Server.postData';

const AuthorForm = (props) => {
  const [state, setState] = useState({
    name: "" as string,
    imageUrl: "" as string,
    books: [] as string[],
    bookTemp: "" as string
  });


  const handleAddBook = (_event: any) => {
    return setState({
      ...state,
      books: state.books.concat([state.bookTemp]),
      bookTemp: ""
    },);
  };

  const handleSubmit = (event: any): any => {

    const data = {
      name: state.name,
      imageUrl: state.imageUrl,
      books: state.books
    }

    postData(undefined, data);

    return (
      event.preventDefault(),
      props.onAddAuthor(state)
    );
  };

  const onFieldChange = (event: any) => {
    return setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="AddAuthorForm__input">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={state.name} onChange={onFieldChange} />
        </div>
        <div className="AddAuthorForm__input">
            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" name="imageUrl" value={state.imageUrl} onChange={onFieldChange} />
        </div>
        <div className="AddAuthorForm__input">
            <label htmlFor="bookTemp">Books:</label>
            {state.books.map((book) => <p key={book}>{book}</p>)}
            <input type="text" name="bookTemp" value={state.bookTemp} onChange={onFieldChange} />
            <input type="button" value="+" onClick={handleAddBook} />
        </div>
        <input type="submit" value="Add" />
    </form>
  );
};

export default AuthorForm;
