import React, { useState } from 'react';
import './style/AddAuthorForm.css';
import postData from '../server/request/Server.postData';

const AuthorForm = (props) => {
  const [state, setState] = useState({
    name: "" as string,
    imageUrl: "" as string,
    books: [] as any,
    bookTemp: "" as string
  });

  const removeBook = (removeIndex: any) => {
    return setState({
      ...state,
      books: state.books.filter((_book, index)=> index !== removeIndex)
    })
  };

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
    <form onSubmit={handleSubmit} className="AddAuthorForm">
        <div className="AddAuthorForm__input">
            <label htmlFor="name" className="labelText">Name</label>
            <input type="text" name="name" className="inputLabel" value={state.name} onChange={onFieldChange} />
        </div>
        <div className="AddAuthorForm__input">
            <label htmlFor="imageUrl" className="labelText">Image URL</label>
            <input type="text" name="imageUrl" className="inputLabel" value={state.imageUrl} onChange={onFieldChange} />
        </div>
        <div className="AddAuthorForm__input">
            <label htmlFor="bookTemp" className="labelText">Books:</label>
            <ul className="bookAndButton">
              {state.books.map((book, index) => (
                <li key={index} className="bookStyle">{book}
                <button className="removeBook" onClick={(event) => {
                    event.preventDefault();
                    return removeBook(index);
                  }}>x</button>
                </li>
              ))}
            </ul>
            <input type="text" name="bookTemp" className="inputLabel" value={state.bookTemp} onChange={onFieldChange}></input>
            <input type="button" className="bookAddButton" value="add book" onClick={handleAddBook} />
        </div>
        <input type="submit" className="addAuthorButton" value="Add" />
    </form>
  );
};

export default AuthorForm;
