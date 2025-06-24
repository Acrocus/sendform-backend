const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // <--- ось це додай
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send", (req, res) => {
  const { name, message } = req.body;
if (!name || !message) {
  return res.status(400).json({ success: false, error: "Name and message are required." });
}


  console.log("Form submission:", req.body);
  res.status(200).json({ message: "Message received." });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
