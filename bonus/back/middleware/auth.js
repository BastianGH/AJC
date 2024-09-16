const jwt = require("jsonwebtoken");
const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./data/chinook.db",
  },
  useNullAsDefault: true,
});

const auth = (req, res, next) => {
  const token = req.get("X-Token");
  if (!token) return res.status(401).send();

  jwt.verify(token, "secret", async (err, jwtVerified) => {
    if (err) return res.status(401).send();

    const result = await knex("users").where({ token });
    if (result.length > 0) {
      next();
    } else {
      return res.status(403).send("Unauthorized");
    }
  });
};

module.exports = { auth };
