import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Our API is working on Docker!");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});