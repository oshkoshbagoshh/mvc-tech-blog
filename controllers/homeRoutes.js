const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: Comment,
                    include: [
                        {
                            model: User,
                            attributes: ['username'],
                        },
                    ],
                },
                {
                    model: User,
                    attributes: ['username', 'id'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            logged_in: req.session.logged_in,
            posts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    include: [
                        {
                            model: User,
                            attributes: ['username'],
                        },
                    ],
                },
                {
                    model: User,
                    attributes: ['username', 'id'],
                },
            ],
        });

        const post = postData.get({ plain: true });

        res.render('post', {
            ...post,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
        res.render('login', {
            logged_in: req.session.logged_in,
        });
});

router.get('/dashboard', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: Comment,
                    include: [
                        {
                            model: User,
                            attributes: ['username'],
                        },
                    ],
                },
                {
                    model: User,
                    attributes: ['username', 'id'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', {
        posts,
    });

} catch (err) {
    res.status(500).json(err);
}
});


module.exports = router;