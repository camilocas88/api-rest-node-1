require("dotenv").config();

const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/mongo");
const app = express();

app.use(cors());
app.use(express.json()); //capturar objeto json en 
app.use(express.static("storage"));


const port = process.env.PORT || 3000;

/** 
 *  Here call the routes
 * 
 */

//TODO: localhost/api/___________

app.use("/api", require("./routes"));




app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

dbConnection();