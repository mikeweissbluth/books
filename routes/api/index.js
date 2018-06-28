const router = require('express').Router();
const bookRoutes = require('./books');


//book routes
router.use('/books', bookRoutes);

// magazine routes


module.exports = router;

