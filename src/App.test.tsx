import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './components/display/Display.Components';
import authors  from './data/Data.authors';
import Hero from './components/display/display.components/Diplay.Hero';
import renderer from 'react-test-renderer';
import Continue from './components/display/display.components/Display.Continue';
import { Simulate } from 'react-dom/test-utils';
import Book from './components/display/display.components/Display.Book';
import Turn from './components/display/display.components/Display.Turn';
import * as Components from './components/display/Display.Components';
import getTurnData from './components/getTurnData';

test('Get footer text', () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/Wikimedia Commons/ig);
  expect(linkElement).toBeInTheDocument();
});

test('Expect length to be greater than 0', () => {
  expect(authors.length).toBeGreaterThan(0);
});

test('Expect to reder:', () => {
    const rendered = renderer.create(<Hero />).toJSON();
    expect(rendered).toMatchSnapshot();
});

test('Expect Continue to be shown and clickable', () => {
  const c = 'correct';
  const rendered = renderer.create(<Continue show={c} onContinue={Simulate.click} />);
  expect(rendered.toJSON()).toBeTruthy();
});

test('Expect Book to be rendered with items', () => {
  const title = "test";
  const rendered = renderer.create(<Book title={title} onClick={Simulate.click} />);
  expect(rendered.toJSON()).toBeTruthy();
});

test('Expect Turn to have attributes and render', () => {
  const turnData = {
    author: "name",
    books: ["book", "book2"]
  }
  const hightlight = 'correct';
  const rendered = renderer.create(<Turn {...turnData} highlight={hightlight} onAnswerSelected={Simulate.click} />).toJSON();
  expect(rendered).toMatchSnapshot();
});

test("Should have access to all Display Components", () => {
  const title = "Book Title";
  const turnData = {
    author: "name",
    books: ["book", "book1"]
  }
  const hgh = 'correct';
  const rendered = renderer.create(
    <div>
      <Components.Book title={title} onClick={Simulate.click} />
      <Components.Continue show={hgh} onContinue={Simulate.click} />
      <Components.Turn {...turnData} highlight={hgh} onAnswerSelected={Simulate.click} />
      <Components.Footer />
      <Components.Hero />
    </div>
  ).toJSON();
  expect(rendered).toMatchSnapshot();
});

test("Should receive turn Data", () => {
  const authors = [
    {
      name: "name",
      imageUrl: "imageUrl",
      books: ["book", "book2"]
    },
    {
      name: "name1",
      imageUrl: "imageUrl1",
      books: ["book3", "book1"]
    }
  ];
  expect(getTurnData(authors)).toBeTruthy();
});


