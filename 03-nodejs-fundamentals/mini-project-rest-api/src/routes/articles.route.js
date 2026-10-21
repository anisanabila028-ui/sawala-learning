const express = require("express");

const {
    getArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
} = require("../controllers/articles.controller");

const router = express.Router();

// GET semua artikel
router.get("/", getArticles);

// GET artikel berdasarkan ID
router.get("/:id", getArticleById);

// POST artikel baru
router.post("/", createArticle);

// PUT artikel
router.put("/:id", updateArticle);

// DELETE artikel
router.delete("/:id", deleteArticle);

module.exports = router;