const router = require('express').Router();
const userRoutes = require('./userController');
// every route in here has /api prepended before it

router.use('/users', userRoutes);


module.exports = router;