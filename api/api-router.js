const router = require("express").Router();
const bcrypt = require("bcryptjs");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0//", salt);

router.use("/auth", authRouter);
router.use("/users", usersRouter);

router.get("/", (req, res) => {
  res.json({ api: "It's alive" });
});

router.post("/", (req, res) => {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0//", salt, function(err, hash) {
      //store hash in password db
    });
  });
});

module.exports = router;
