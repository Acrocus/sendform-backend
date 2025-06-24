const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// 🔐 Твої Telegram дані
const TELEGRAM_BOT_TOKEN = '7659527251:AAGtq42L13HhF8Qe-qhf7D1r-1Dn1UPyzKg';
const TELEGRAM_CHAT_ID = '2007196280';

app.use(cors());
app.use(bodyParser.json());

app.post('/send', async (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ success: false, error: "Name and message are required." });
  }

  const text = `💬 НОВЕ ПОВІДОМЛЕННЯ\n👤 Ім’я: ${name}\n📝 Повідомлення: ${message}`;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: text
    });

    res.json({ success: true });
  } catch (error) {
    console.error("❌ Telegram error:", error.response?.data || error.message);
    res.status(500).json({ success: false, error: "Не вдалося надіслати повідомлення в Telegram." });
  }
});

app.get('/', (req, res) => {
  res.send("✅ Сервер працює");
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущено на порті ${PORT}`);
});
