// Imports
const router = require("express").Router();
const { BlogPost } = require("../../models");
const withAuth = require("../../utils/auth");

// Route to create a new blog post
router.post("/", withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogPost);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Route to edit an existing blog post
router.put("/:id", withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const blogPostData = await BlogPost.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!blogPostData) {
      res.status(404).json({ message: "No blog post found with this id!" });
      return;
    }

    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to delete an existing blog post
router.delete("/:id", withAuth, async (req, res) => {
  console.log(req.params.id);
  try {
    const blogPostData = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogPostData) {
      res.status(404).json({ message: "No blog post found with this id!" });
      return;
    }

    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Exports
module.exports = router;
