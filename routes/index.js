const express = require('express');
const router  = express.Router();
const User = require("../models/User");
const Comment = require("../models/Comment");

/* GET home page */
router.get('/', (req, res, next) => {
  console.log(req.user)
  res.render('index');
});

router.get("/users/:idUser", (req, res) => {

  const idUser = req.params.idUser;

  User.findById(idUser)
  .then(user => {
    res.render("users/user", {user});
  });
})

router.get("/users", (req, res) => {
  User.find()
  .then(users => {
    res.render("users/users", {Pepe});
  })
})

router.get("/comment" , (req, res) => {
  Comment.find()
  .populate("author", "username password")
  .then(comment => {
    res.render("comment", {comment})
  })
})
router.post("/comment/:idComment", (req, res) => {
  const {text} = req.body;
  const {idComment} = req.params;
  Comment.findByIdAndUpdate(idComment, {text}, {new:true})
  .then(comment => {
    console.log(comment);
    res.redirect("/comment");
  })
})
module.exports = router;
