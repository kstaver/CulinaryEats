const router = require("express").Router();
const { post } = require(".");
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

// route for homepage body
router.get("/", (req, res) => {
  console.log("======================");
  // grabs all of our data
  Post.findAll({
    attributes: [
      "id",
      "description",
      // 'ingredients',
      // 'instructions',
      "title",
      "category",
    ],
  })
    .then((dbPostData) => {
      // then we want to grab homepage structure and dbpos
      // This will loop over and map each Sequelize object into a serialized version of itself, saving the results in a new posts array.
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      // console.log(posts);
      
      const handlebarsObj = 
      { posts: posts,
      };

      res.render("homepage", handlebarsObj);
      // res.render('homepage', {
      //   handlebarsObj,
      //   loggedIn: req.session.loggedIn
      // });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/post/1
router.get("/post/:id", (req, res) => {
  console.log(req.session)
  Post.findOne({
    where: {
      id: req.params.id,
    },
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
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
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
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      // serialize the data
      const post = dbPostData.get({ plain: true });
      console.log(post);
      // render the data on the single post handlebars page
      res.render("single-post", {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// this will render our login.handlebars
router.get("/login", (req, res) => {
  //  check for a session if there is a session make user go back to "/"
  // if (req.session.loggedIn) {
  //   res.redirect("/");
  //   return;
  // }

  // send our login.handlebars page
  res.render("login");
});

// this will render our login.handlebars
router.get("/signup", (req, res) => {
  // send our register.handlebars page
  res.render("signup");
});

router.get("/createPost", (req, res) => {
  // send our dashboard.handlebars page
  res.render("newPost");
});

router.get("/all-dishes", (req, res) => {
  // grabs all of our data
  Post.findAll({
    attributes: [
      "id",
      "description",
      "ingredients",
      "instructions",
      "title",
      "category",
    ],
  })
    .then((dbPostData) => {
      // then we want to grab homepage structure and dbpostdata
      // This will loop over and map each Sequelize object into a serialized version of itself, saving the results in a new posts array.
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      // console.log(posts);

      const handlebarsObj = { posts: posts };

      res.render("allDishes-page", handlebarsObj);
      // res.render('homepage', {
      //   handlebarsObj,
      //   loggedIn: req.session.loggedIn
      // });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/Chinese", (req, res) => {
  Post.findAll({
    attributes: [
      "id",
      "description",
      "ingredients",
      "instructions",
      "title",
      "category",
    ],
    where: {
      category: "chinese",
    },
  })
    .then((dbPostData) => {
      // then we want to grab homepage structure and dbpostdata
      // This will loop over and map each Sequelize object into a serialized version of itself, saving the results in a new posts array.
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      // console.log(posts);

      const handlebarsObj = { posts: posts };

      res.render("chinese-page", handlebarsObj);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/Mexican", (req, res) => {
  Post.findAll({
    attributes: [
      "id",
      "description",
      "ingredients",
      "instructions",
      "title",
      "category",
    ],
    where: {
      category: "mexican",
    },
  })
    .then((dbPostData) => {
      // then we want to grab homepage structure and dbpostdata
      // This will loop over and map each Sequelize object into a serialized version of itself, saving the results in a new posts array.
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      // console.log(posts);

      const handlebarsObj = { posts: posts };

      res.render("mexican-page", handlebarsObj);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/Italian", (req, res) => {
  Post.findAll({
    attributes: [
      "id",
      "description",
      "ingredients",
      "instructions",
      "title",
      "category",
    ],
    where: {
      category: "italian",
    },
  })
    .then((dbPostData) => {
      // then we want to grab homepage structure and dbpostdata
      // This will loop over and map each Sequelize object into a serialized version of itself, saving the results in a new posts array.
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      // console.log(posts);

      const handlebarsObj = { posts: posts };

      res.render("italian-page", handlebarsObj);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get("/logout", (req,res) => {

    


})

module.exports = router;
