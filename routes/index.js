const express = require('express');
const router = express.Router();
const Post = require('../models/post');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const messages = await Post.find();
  res.render('index', { title: 'Message Board', messages});
});

router.get('/new', function(req, res) {
  res.render('newPost');
});

router.post('/new', function(req, res) {
  const postInfo = {
    author: req.body.author,
    body: req.body.body,
    added: new Date()
  }

  const newPost = new Post(postInfo);

  newPost.save(function(err) {
    if (err) throw err;
  });

  res.redirect('/');
});

module.exports = router;
