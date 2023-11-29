const express = require('express');
const router = express.Router();

// Specific (custom, not part of "The Seven" RESTful routes) route for searching books
router.get('/books/search', (req, res) => {
    // Code for searching books
});

// Route to display form for adding a new book (typically a GET for a form)
router.get('/books/new', (req, res) => {
    // Code to show form for adding a new book
});

// Route to get all books
router.get('/books', (req, res) => {
    // Code to return all books
});

// Route to get a specific book by ID
router.get('/books/:id', (req, res) => {
    // Code to return a book by its ID
});

// Route to add a new book
router.post('/books', (req, res) => {
    // Code to create a new book
});

// Route to display form for editing a specific book by ID (typically a GET for a form)
router.get('/books/:id/edit', (req, res) => {
    // Code to show form for editing a book
});

// Route to update a specific book by ID
router.put('/books/:id', (req, res) => {
    // Code to update a book by ID
});

// Route to delete a specific book by ID
router.delete('/books/:id', (req, res) => {
    // Code to delete a book by ID
});


//General rule: more specific routes should go above more general ones. Also consider that routes that have the same endpoint 
//but which have different http methods (eg., /books, which has both a get and post method for different purposes)
//don't need to follow this general rule.

//Explanation link: https://chat.openai.com/share/edcf18b6-01ff-46e2-982a-6eb5a25d8982
