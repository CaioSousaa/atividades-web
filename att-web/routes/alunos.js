const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "..", "alunos.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler alunos.json:", err);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }

    try {
      const alunos = JSON.parse(data);
      res.json(alunos);
    } catch (parseErr) {
      console.error("Erro ao interpretar o JSON:", parseErr);
      res.status(500).json({ error: "Erro ao processar os dados dos alunos" });
    }
  });
});

module.exports = router;
