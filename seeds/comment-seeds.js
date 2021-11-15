const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 1,
    post_id: 4
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 2,
    post_id: 4
  },
];


const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
