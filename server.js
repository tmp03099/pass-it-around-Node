const express = require("express");

const app = express();

//create routes
app.get("/", (req, res) => {
  res.send(`
    <h2>99 Bottles of beer on the wall</h2>
    <a href="/98">"take on down, pass it around"</a>
    `);
});

app.get("/:number_of_bottles", (req, res) => {
  const { number_of_bottles } = req.params;

  if (number_of_bottles > 0) {
    res.send(
      `<h2>${number_of_bottles} Bottles of beer on the wall</h2>
            <a href="/${
              number_of_bottles - 1
            }">"take on down, pass it around"</a>`
    );
  } else {
    res.send(`
       <h2> ${number_of_bottles} Bottles of beer on the wall </h2>
        <a href="/">Start over</a>
        `);
  }
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
