const Author = require('./author-model');
const Book = require('../Books/book-model');

exports.createAuthor = async (req, h) => {
  try {
    const author = await Author.create(req.payload);
    return h.response(author).code(201);
  } catch (error) {
    return h.response({ message: error.message }).code(400);
  }
};

exports.getAuthors = async (req, h) => {
  try {
    const authors = await Author.findAll();
    return authors;
  } catch (error) {
    return h.response({ message: error.message }).code(500);
  }
};

exports.getAuthorById = async (req, h) => {
  try {
    const author = await Author.findByPk(req.params.id, { include: Book });
    if (!author) {
      return h.response({ message: 'Author not found' }).code(404);
    }
    return author;
  } catch (error) {
    return h.response({ message: error.message }).code(500);
  }
};

exports.deleteAuthor = async (req, h) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) {
      return h.response({ message: 'Author not found' }).code(404);
    }
    const books = await Book.findAll({ where: { authorId: req.params.id } });
    if (books.length > 0) {
      return h.response({ message: 'Cannot delete author with books' }).code(400);
    }
    await author.destroy();
    return { message: 'Author deleted' };
  } catch (error) {
    return h.response({ message: error.message }).code(500);
  }
};
