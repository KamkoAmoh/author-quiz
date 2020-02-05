import getData from '../server/request/Server.getData';

const authors: object[] = [
  {
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['The Adventures of Huckleberry Finn']
  },
  {
      name: 'Joseph Conrad',
      imageUrl: 'images/authors/josephconrad.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Heart of Darkness']
  },
  {
      name: 'J.K. Rowling',
      imageUrl: 'images/authors/jkrowling.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Harry Potter and the Sorcerers Stone']
  },
  {
      name: 'Stephen King',
      imageUrl: 'images/authors/stephenking.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['The Shining', 'IT']
  },
//   {
//       name: 'Charles Dickens',
//       imageUrl: 'images/authors/charlesdickens.jpg',
//       imageSource: 'Wikimedia Commons',
//       books: ['David Copperfield', 'A Tale of Two Cities']
//   },
//   {
//       name: 'William Shakespeare',
//       imageUrl: 'images/authors/williamshakespeare.jpg',
//       imageSource: 'Wikimedia Commons',
//       books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
//   }
];

const requestData = async (authors: object[]) => {
    const data =  await getData();
    for (let i = 0; i < data.length; i++) {
        authors.push(data[i]);
    }

    return authors;
}

requestData(authors);

export default authors;