const express = require("express");
const server = express();
const router = express.Router();
const fs = require("fs");

server.use(express.json({ extend: true }));

router.get("/", (req, res) => {
  const content = fs.readFileSync("./data/items.json", "utf-8");

  res.send(JSON.parse(content));
});

router.post("/", (req, res) => {
  res.send("Bem Vindo");
});

router.put("/", (req, res) => {
  res.send("Bem Vindo");
});

router.delete("/", (req, res) => {
  res.send("Bem Vindo");
});

server.use(router);

server.listen(3000, () => {
  console.log("Servidor ON");
});
