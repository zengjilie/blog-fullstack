const router = require('express').Router();
const res = require('express/lib/response');
const { resume } = require('npmlog');
const Post = require('../models/Post');
const fs = require('fs');

//create post
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);

    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }

});

//update a post
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username !== req.body.username) {
            res.status(401).json('You can only update your posts!');
        } else {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    { $set: req.body },
                    { new: true },
                );
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

//delete post
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username !== req.body.username) {
            res.status(401).json('You can only delete your posts');
        } else {
            try {
                const deletedPost = await Post.findByIdAndDelete(req.params.id);
                try {
                    //delete local file;
                    fs.unlinkSync(`./images/${req.body.photo}`);
                } catch (err) {
                    console.log(err);
                }
                res.status(200).json('Post has been deleted');
            } catch (err) {
                res.status(500).json(err);
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

//get a post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            res.status(404).json("Post doesn't exists!");
        } else {
            res.status(200).json(post);
        }
    } catch (err) {
        res.status(500).json(err);
    }
})


//get posts from a user or category or all posts
router.get('/', async (req, res) => {
    const username = req.query?.user;
    const catname = req.query?.cat;
    console.log(username);
    console.log(catname);

    try {
        let posts;
        if (username) {
            posts = await Post.find({ username: username });
        } else if (catname) {
            posts = await Post.find({
                categories: {
                    $in: [catname],
                }
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
