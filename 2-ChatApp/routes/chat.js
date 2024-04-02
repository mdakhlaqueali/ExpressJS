const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/chats", (req, res) => {
  fs.readFile("chats.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "No messages found!";
    }
    res.send(`
        ${data}
        <form
        action="/chats"
        method="POST"
        onSubmit="document.getElementById('username').value = localStorage.getItem('username')"
      >
        <input type="text" id="message" name="message" placeholder="Message" />
        <input type="hidden" id="username" name="username" />
        <button type="submit">Submit</button>
      </form>`);
  });
});

router.post("/chats", (req, res) => {
  console.log(req.body);
  fs.writeFile(
    "chats.txt",
    `${req.body.username} : ${req.body.message} `,
    { flag: "a" },
    (err) => {
      err ? console.log(err) : res.redirect("/chats");
    }
  );
});

module.exports = router;
