const router = require('express').Router();
const thoughtRoutes = require('./ThoughtsRoutes');
const userRoutes = require('./UserRoutes');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;