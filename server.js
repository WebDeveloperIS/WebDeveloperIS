import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Chat endpoint
app.post("/chat", (req, res) => {
  const { message } = req.body;

  // Oddiy javob
  const reply = "AI javobi: " + message;

  res.json({ reply });
});

// Render server uchun PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server ishlayapti: ${PORT}-port`));
