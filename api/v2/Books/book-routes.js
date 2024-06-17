const bookController = require('./book-controller');

module.exports = [
  {
    method: 'POST',
    path: '/books',
    handler: bookController.createBook,
    options: {
      tags: ['api', 'books'],
      description: 'Create a new book'
    }
  },
  {
    method: 'GET',
    path: '/books',
    handler: bookController.getBooks,
    options: {
      tags: ['api', 'books'],
      description: 'Get all books'
    }
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: bookController.getBookById,
    options: {
      tags: ['api', 'books'],
      description: 'Get a book by ID'
    }
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: bookController.deleteBook,
    options: {
      tags: ['api', 'books'],
      description: 'Delete a book by ID'
    }
  }
];
