const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

/* Root route (browser error fix) */
app.get("/", (req, res) => {
  res.send("API is running successfully 🚀");
});

/* Keyword generator API */
app.post("/api/generate", (req, res) => {
  const { keyword } = req.body;

  if (!keyword) {
    return res.status(400).json({ error: "Keyword is required" });
  }

  // TEMP keyword logic (stable test)
  const data = {
    keyword: keyword,
    related_keywords: [
      `${keyword} tools`,
      `${keyword} strategy`,
      `${keyword} examples`,
      `${keyword} for beginners`,
      `best ${keyword}`,
      `how to do ${keyword}`
    ],
    questions: [
      `What is ${keyword}?`,
      `How does ${keyword} work?`,
      `Why is ${keyword} important?`,
      `How to improve ${keyword}?`
    ]
  };

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
