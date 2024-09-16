const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const knex = require("knex")({
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./data/chinook.db",
  },
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.get("/genres", (req, res) => {
  knex
    .select("Name")
    .from("genres")
    .then((genres) => {
      res.json(genres);
    });
});

app.post("/genre", (req, res) => {
  const { Name } = req.body;

  console.log(Name);
  if (!Name) {
    return res.status(400).json({ error: "Name is required" });
  }
  knex
    .insert({ Name })
    .into("genres")
    .then((newGenre) => {
      res.json({ genreId: newGenre[0] });
    });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
