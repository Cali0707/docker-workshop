import express from "express";
import fs from "node:fs";
import readline from "readline";
import cors from "cors";

import { logResult, parseRequest } from "./utils.js";

const app = express();

app.use(express.json());
app.use(cors());

const stream = fs.createWriteStream(process.env.HISTORY_FILE ?? "history.log", {
  flags: "a",
});
process.on("exit", () => stream.end());

app.post("/add", (req, res) => {
  parseRequest(req, res, (x, y) => {
    const result = x + y;

    logResult(stream, "+", x, y, result);

    return res.status(200).send({ result, x, y, operation: "+" });
  });
});

app.post("/sub", (req, res) => {
  parseRequest(req, res, (x, y) => {
    const result = x - y;

    logResult(stream, "-", x, y, result);

    return res.status(200).send({ result, x, y, operation: "-" });
  });
});

app.post("/mul", (req, res) => {
  parseRequest(req, res, (x, y) => {
    const result = x * y;

    logResult(stream, "*", x, y, result);

    return res.status(200).send({ result, x, y, operation: "*" });
  });
});

app.post("/div", (req, res) => {
  parseRequest(req, res, (x, y) => {
    if (y === 0) {
      return res
        .status(400)
        .send({
          message: "invalid variable: cannot divide by 0",
          variable: "y",
        });
    }

    const result = x / y;

    logResult(stream, "/", x, y, result);

    return res.status(200).send({ result, x, y, operation: "/" });
  });
});

app.get("/history", async (_, res) => {
  const readStream = fs.createReadStream(
    process.env.HISTORY_FILE ?? "history.log",
  );
  const rl = readline.createInterface({ input: readStream });
  const result = [];
  for await (const line of rl) {
    try {
      result.push(JSON.parse(line));
    } catch (e) {
      res.status(500).send({ message: "malformed history file" });
    }
  }

  return res.status(200).send({ result });
});

app.listen(process.env.PORT ?? 3000);
