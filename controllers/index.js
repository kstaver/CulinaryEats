const router = require('express').Router();

// connect out route files 
const apiRoutes = require('./api');
const homepageRoutes = require('./homepage-routes');
const newPostRoutes = require('./newPost-routes');


// http://localhost:3001/api
router.use('/api', apiRoutes);
// http://localhost:3001/
router.use('/', homepageRoutes);
<<<<<<< HEAD
// http://localhost:3001/createPost
=======
// http://localhost:3001/dashboard
>>>>>>> 2dec411c4f757f1237db56992570b32349b1c423
router.use('/createPost', newPostRoutes);



router.use((req, res) => {
  res.status(404).end();
})

module.exports = router;