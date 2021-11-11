const router = require('express').Router();

// connect out route files 
const apiRoutes = require('./api');
const homepageRoutes = require('./homepage-routes');
const newPostRoutes = require('./newPost-routes');


// http://localhost:3001/api
router.use('/api', apiRoutes);
// http://localhost:3001/
router.use('/', homepageRoutes);
// http://localhost:3001/createPost
router.use('/createPost', newPostRoutes);



router.use((req, res) => {
  res.status(404).end();
})

module.exports = router;