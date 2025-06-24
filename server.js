const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // <--- ось це додай
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  console.log("Form submission:", req.body);
  res.status(200).json({ message: "Message received." });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
