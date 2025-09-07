import express from "express";
import cors from "cors";
import pkg from "pg";

const { Pool } = pkg;
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// DB接続（docker-composeのサービス名をhostに使う）
const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "testdb",
  password: "password",
  port: 5432,
});

app.get("/", async (req, res) => {
  res.json("hello");
});

app.get("/api/time", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
