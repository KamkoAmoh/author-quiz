import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import reducer from './components/reducer';
import * as serviceWorker from './serviceWorker';
import AddAuthorForm from './AddAuthorForm';

let store = Redux.createStore(reducer);
 ReactDOM.render(
    <BrowserRouter>
      <ReactRedux.Provider store={store}>
        <React.Fragment>
          <Route exact path="/" component={AuthorQuiz} />
          <Route path="/add" component={AddAuthorForm} />
        </React.Fragment>
      </ReactRedux.Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
serviceWorker.register();

