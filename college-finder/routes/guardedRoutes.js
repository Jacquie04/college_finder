const express = require('express');
const router = express.Router();

router.get('/api/user', (req, res) => {

    res.json({id: req.user && req.user.id});
    
})

module.exports = router;