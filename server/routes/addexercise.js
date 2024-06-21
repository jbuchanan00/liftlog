var express = require("express");
var router = express.Router();
const db = require("../db");
var queries = require("../../db_queries/exercises/set_exercises");

router.post("/api/addexercise", async (req, res, next) => {
  try {
    console.log("new", queries.add_exercise(req.body.name));
    const result = await db.query(queries.add_exercise(req.body.name));
    console.log("result:", result);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
  res.redirect("/");
});

module.exports = router;
