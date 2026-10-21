let articles = [
    {
        id: 1,
        title: "Belajar Node.js",
        content: "Node.js adalah runtime JavaScript untuk membuat aplikasi backend."
    },
    {
        id: 2,
        title: "Belajar Express",
        content: "Express adalah framework Node.js untuk membuat web server dan REST API."
    }
];

// GET /articles
const getArticles = (req, res) => {
    res.json(articles);
};

// GET /articles/:id
const getArticleById = (req, res) => {
    const id = Number(req.params.id);

    const article = articles.find((article) => article.id === id);

    if (!article) {
        return res.status(404).json({
            message: "Artikel tidak ditemukan"
        });
    }

    res.json(article);
};

// POST /articles
const createArticle = (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: "Title dan content wajib diisi"
        });
    }

    const newArticle = {
        id: articles.length > 0 ? articles[articles.length - 1].id + 1 : 1,
        title,
        content
    };

    articles.push(newArticle);

    res.status(201).json({
        message: "Artikel berhasil dibuat",
        data: newArticle
    });
};

// PUT /articles/:id
const updateArticle = (req, res) => {
    const id = Number(req.params.id);

    const article = articles.find((article) => article.id === id);

    if (!article) {
        return res.status(404).json({
            message: "Artikel tidak ditemukan"
        });
    }

    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: "Title dan content wajib diisi"
        });
    }

    article.title = title;
    article.content = content;

    res.json({
        message: "Artikel berhasil diperbarui",
        data: article
    });
};

// DELETE /articles/:id
const deleteArticle = (req, res) => {
    const id = Number(req.params.id);

    const articleIndex = articles.findIndex(
        (article) => article.id === id
    );

    if (articleIndex === -1) {
        return res.status(404).json({
            message: "Artikel tidak ditemukan"
        });
    }

    articles.splice(articleIndex, 1);

    res.json({
        message: "Artikel berhasil dihapus"
    });
};

module.exports = {
    getArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
};