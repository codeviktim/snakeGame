const express = require("express");
const app = express();
const port = process.env.NODE_ENV || 3000;

//static path
app.use(express.static(__dirname + "/public/"));
//root path
app.get("/", (req, res) => res.sendFile(__dirname + "index.html"));

app.listen(port, () => console.log(`server running on port ${port}`));
