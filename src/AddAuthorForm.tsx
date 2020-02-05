import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AuthorForm from './components/AddAuthorForm';
import './components/style/AddAuthorForm.css'

const AddAuthorForm = ({ onAddAuthor }) => {
  return (
    <div className="AddAuthorForm">
      <h1>Add Author</h1>
      <AuthorForm onAddAuthor={onAddAuthor} />
    </div>
  );
};

const mapDispatchToProps = ( dispatch, props ) => {
  return {
    onAddAuthor: (author) => {
      dispatch({ type: 'ADD_AUTHOR', author});
      props.history.push('/');
    }
  };
};

export default withRouter(connect(() => ({}), mapDispatchToProps)(AddAuthorForm));