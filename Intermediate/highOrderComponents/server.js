import express from "express";
import cors from "cors";

const app = express();

const PORT = 8080;

// Use the cors middleware to enable CORS
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Satyam");
});

app.get("/satyam", (req, res) => {
  const satyam = ["a", "b", "c", "d"];
  res.send(satyam);
});

app.listen(PORT, () => {
  console.log(`The server is running on localhost:${PORT}`);
});
