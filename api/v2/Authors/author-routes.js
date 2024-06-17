const authorController = require('./author-controller');

module.exports = [
  {
    method: 'POST',
    path: '/authors',
    handler: authorController.createAuthor,
    options: {
      tags: ['api', 'authors'],
      description: 'Create a new author'
    }
  },
  {
    method: 'GET',
    path: '/authors',
    handler: authorController.getAuthors,
    options: {
      tags: ['api', 'authors'],
      description: 'Get all authors'
    }
  },
  {
    method: 'GET',
    path: '/authors/{id}',
    handler: authorController.getAuthorById,
    options: {
      tags: ['api', 'authors'],
      description: 'Get an author by ID'
    }
  },
  {
    method: 'DELETE',
    path: '/authors/{id}',
    handler: authorController.deleteAuthor,
    options: {
      tags: ['api', 'authors'],
      description: 'Delete an author by ID'
    }
  }
];
