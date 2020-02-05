import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

mongoose.connect('mongodb://localhost/authors', {useNewUrlParser: true, useUnifiedTopology: true});

const authorSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  books: [],
})

const AuthorData = mongoose.model('authors', authorSchema);

server.get('/', async (_, res) => {
  res.setHeader('Content-Type', 'application/json');
  const data = await AuthorData.find({});
  if (!data) return res.sendStatus(404);
  res.json(data);
});

server.post('/', async (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  const author = new AuthorData({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    books: req.body.books
  })

  author.save();

  res.json(author);
});

server.delete('/:id', async (req, res) => {
  const data = await AuthorData.findByIdAndDelete(req.params.id);
  if (!data) return res.sendStatus(404);
  res.send(data.toJSON());
})

server.listen('3001', async () => {
  console.log('Server starts at port 3001');
});
