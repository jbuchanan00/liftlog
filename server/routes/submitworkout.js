var express = require('express');
var router = express.Router();



router.post('/api/submitworkout', async (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;