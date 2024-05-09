const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const cors = require('cors');

var submitRouter = require('./routes/submitworkout');
var indexRouter = require('./routes/index');

app.use(express.static("../build"));
app.use(bodyParser.json())
app.use(cors());

app.use('/', submitRouter);
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));