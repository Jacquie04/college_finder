const express = require('express');
const router = express.Router();

router.get('/api/user', (req, res) => {
    console.log('in user api guarded routes', req.user)
    res.json({id: req.user && req.user.id});
})

module.exports = router;