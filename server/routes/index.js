var express = require('express');
var router = express.Router();
const db = require('../db');
var queries = require('../../db_queries/exercises/get_excerises')



router.get('/exercises', async (req, res, next) => {
    try {
        //console.log(queries.get_all);
        const result = await db.query(queries.get_by_id(1));
        //console.log(result)
        res.json(result.rows);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
})

module.exports = router;