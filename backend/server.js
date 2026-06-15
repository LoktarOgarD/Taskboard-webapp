const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("TaskBoard Backend läuft");
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});