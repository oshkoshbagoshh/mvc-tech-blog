const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models');

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            body: req.body.comment,
            post_id: req.body.postId,
            user_id: req.session.user_id,

        })
        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;