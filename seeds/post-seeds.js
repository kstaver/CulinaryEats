const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: `words`,
    category: "italian"

    // post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    // user_id: 1
  },
  {
    title: 'red.',
    post_content: `words`,
    category: "italian"
    // post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    // user_id: 1
  }

]


const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;