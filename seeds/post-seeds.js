const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
<<<<<<< HEAD
    description: 'Home made',
    ingredients: 'pepper',
    instructions: 'cook',
    // post_content: `words`,
=======
    post_content: `words`,
>>>>>>> 2dec411c4f757f1237db56992570b32349b1c423
    category: "italian"

    // post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    // user_id: 1
  },
  {
    title: 'red.',
<<<<<<< HEAD
    description: 'Home made',
    ingredients: 'Thawing a turkey usually takes about 24 hours for every 4 pounds. For a 15-pound turkey, youll want to put the turkey in the refrigerator 5 days before you want to smoke it. The extra day is for brining the bird, which is in the next step. Leave the turkey in the original packaging and place it on a platter or cooking sheet, so you dont have a big mess to clean up after it thaws.',
    instructions: 'cook',
    // post_content: `words`,
=======
    post_content: `words`,
>>>>>>> 2dec411c4f757f1237db56992570b32349b1c423
    category: "italian"
    // post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    // user_id: 1
  }

]


const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;