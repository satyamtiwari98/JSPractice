import express from "express";
import { configDotenv } from "dotenv";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready..");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "The Past, Present, and Future walked into a bar…",
      content: "It was tense.",
    },
    {
      id: 2,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 3,
      title: "Parallel lines have so much in common…",
      content: "It’s a shame they’ll never meet.",
    },
    // Add more jokes as needed
  ];

  res.send(jokes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`the app is runnig on ${PORT} port`);
});
