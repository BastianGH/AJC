const express = require("express");
const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./data/chinook.db",
  },
  useNullAsDefault: true,
});
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3400;
const { auth } = require("./middleware/auth");

app.use(express.json());

app.get("/user", async (req, res) => {
  const users = await knex.select("*").from("users");
  res.json(users);
});

app.post("/user", async (req, res) => {
  const { email, password } = req.body;

  bcrypt.hash(password, 10, async (err, hash) => {
    const result = await knex("users").insert({ email, password: hash });
    res.json({ userID: result[0] });
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const result = await knex("users").where({ email }).select("id", "password");
  if (result.length > 0) {
    const userId = result[0].id;
    const userHash = result[0].password;

    bcrypt.compare(password, userHash, (err, compareResult) => {
      if (compareResult) {
        jwt.sign({ userId }, "secret", null, async (err, token) => {
          await knex("users").where({ id: userId }).update({ token });
          res.set({ "X-Token": token });
          res.json({ login: true });
        });
      } else {
        res.json({ login: false });
      }
    });
  } else {
    res.json({ login: false });
  }
});

app.get("/private", auth, async (req, res) => {
  res.json({ secret: "l'assassin de JFK est l'homme-ours-porc" });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
