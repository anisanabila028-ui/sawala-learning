const express = require("express");
const dotenv = require("dotenv");

const loggerMiddleware = require("./middlewares/logger.middleware");
const articlesRouter = require("./routes/articles.route");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk membaca JSON
app.use(express.json());

// Custom logger middleware
app.use(loggerMiddleware);

// Route utama
app.get("/", (req, res) => {
    res.json({
        message: "REST API Artikel berjalan"
    });
});

// Route artikel
app.use("/articles", articlesRouter);

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});