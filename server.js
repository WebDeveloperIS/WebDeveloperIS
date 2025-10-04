import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Chat endpoint
app.post("/chat", (req, res) => {
  const { message } = req.body;

  // Hozircha oddiy javob qaytaramiz
  let reply = "AI javobi: " + message;

  res.json({ reply });
});

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server ${PORT}-portda ishlayapti`));
