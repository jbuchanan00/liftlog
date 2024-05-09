var express = require('express');
var router = express.Router();
const db = require('../db');



router.get('/', async (req, res, next) => {
    try {
        const result = await db.query('SELECT * FROM exercise');
        console.log(result)
        res.json(result.rows);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;