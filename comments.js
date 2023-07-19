// Create web server 
// Use express module
// Create routes
// Create route for get comments
// Create route for post comments
// Create route for delete comments

// Import express module
const express = require('express');
// Create router
const router = express.Router();

// Import comments controller
const commentsController = require('../controllers/comments');

// Import check-auth middleware
const checkAuth = require('../middleware/check-auth');

// Get comments
router.get('/', commentsController.comments_get_all);

// Get comments by post id
router.get('/:postId', commentsController.comments_get_by_post_id);

// Create comments
router.post('/', checkAuth, commentsController.comments_create);

// Delete comments
router.delete('/:commentId', checkAuth, commentsController.comments_delete);

// Export router
module.exports = router;
