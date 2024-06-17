const Book = require('./book-model');

exports.createBook = async (req, h) => {
  try {
    const book = await Book.create(req.payload);
    return h.response(book).code(201);
  } catch (error) {
    return h.response({ message: error.message }).code(400);
  }
};

exports.getBooks = async (req, h) => {
  try {
    const books = await Book.findAll({ include: 'Author' });
    return books;
  } catch (error) {
    return h.response({ message: error.message }).code(500);
  }
};

exports.getBookById = async (req, h) => {
  try {
    const book = await Book.findByPk(req.params.id, { include: 'Author' });
    if (!book) {
      return h.response({ message: 'Book not found' }).code(404);
    }
    return book;
  } catch (error) {
    return h.response({ message: error.message }).code(500);
  }
};

exports.deleteBook = async (req, h) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return h.response({ message: 'Book not found' }).code(404);
    }
    await book.destroy();
    return { message: 'Book deleted' };
  } catch (error) {
    return h.response({ message: error.message }).code(500);
  }
};
