const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
  res.send(
    `<form onSubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/login" method="POST" ><input type="text" id="username" name="username"/><button>Login</button></form>`
  );
});

router.post("/login",(req, res)=>{
    res.redirect('/chats');
})

module.exports = router;