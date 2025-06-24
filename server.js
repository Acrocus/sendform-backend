
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send', (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ success: false, error: "Name and message are required." });
  }

  console.log("Нове повідомлення:", name, message);
  res.json({ success: true });
});

app.get('/', (req, res) => {
  res.send("✅ Backend працює");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 
