const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

require("./routes/response")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
