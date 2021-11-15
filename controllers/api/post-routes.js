const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const sequalize = require("../../config/connection");
const withAuth = require("../../utils/auth");
// const { post } = require('.');

// no GETS go here (they go in the homepage)
// gets go in homepage-routes
// only put , post , delete

// for testing
router.get("/", (req, res) => {
  Post.findAll({
    attributes: [
      "id",
      "description",
      "ingredients",
      "instructions",
      "title",
      "category",
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id"], //look into created_at
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((postData) => {
      res.send(postData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Post.create({
    //  we want to post with our model attributes from the body input
    title: req.body.title,
    description: req.body.description,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    category: req.body.category,
  })
    .then((newPostData) => {
      // with post we just want to send our created data
      res.send(newPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// for updating a post through its ID
router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      // allow these 2 to be updated
      title: req.body.title,
      post_content: req.body.post_content,
    },
    {
      // where it needs to connect to update
      where: {
        id: req.body.id,
      },
    }
  ).then((updateData) => {
    // check if there was data sent
    if (!updateData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    // send our updated data
    res.send(updateData);
  });
});

// delete a post
router.delete("/:id", withAuth, (req, res) => {
  // just need to tell where the id is for deleting
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
