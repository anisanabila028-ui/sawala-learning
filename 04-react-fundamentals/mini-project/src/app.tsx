
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import Card from "./components/card";
import Button from "./components/button";
import "./style.css";

type Article = {
    id: number;
    title: string;
    category: string;
    content: string;
};

const initialArticles: Article[] = [
    {
        id: 1,
        title: "Mengenal React",
        category: "Programming",
        content:
            "React adalah library JavaScript untuk membangun tampilan website menggunakan komponen.",
    },
    {
        id: 2,
        title: "Belajar TypeScript",
        category: "Programming",
        content:
            "TypeScript membantu kita menulis kode yang lebih terstruktur dengan tipe data.",
    },
    {
        id: 3,
        title: "Tips Belajar Coding",
        category: "Tips",
        content:
            "Latihan secara rutin dan membuat project kecil bisa membantu meningkatkan kemampuan coding.",
    },
];

export default function App() {
    const [articles, setArticles] = useState<Article[]>(initialArticles);
    const [search, setSearch] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [showArticles, setShowArticles] = useState(true);

    useEffect(() => {
        document.title = "Artikel Dashboard";
        console.log("Artikel Dashboard berhasil dibuka");
    }, []);

    const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
    );

    function addArticle(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const cleanTitle = newTitle.trim();

        if (!cleanTitle) return;

        const newArticle: Article = {
            id: Date.now(),
            title: cleanTitle,
            category: "Artikel Baru",
            content: "Artikel baru berhasil ditambahkan.",
        };

        setArticles((previousArticles) => [
            newArticle,
            ...previousArticles,
        ]);

        setNewTitle("");
    }

    return (
        <main className="container">
            <header className="header">
                <div className="header-icon">AD</div>

                <div>
                    <p className="eyebrow">MINI PROJECT REACT</p>
                    <h1>Artikel Dashboard</h1>
                    <p className="header-description">
                        Kelola dan temukan artikel dengan mudah.
                    </p>
                </div>
            </header>

            <section className="stats-grid">
                <Card
                    title="Total Artikel"
                    value={articles.length}
                    description="Semua artikel yang tersimpan"
                />

                <Card
                    title="Hasil Pencarian"
                    value={filteredArticles.length}
                    description="Artikel sesuai kata kunci"
                />
            </section>

            <section className="panel">
                <h2>Tambah Artikel</h2>
                <p className="muted">
                    Masukkan judul untuk membuat artikel baru.
                </p>

                <form className="form-row" onSubmit={addArticle}>
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(event) => setNewTitle(event.target.value)}
                        placeholder="Contoh: Belajar JavaScript"
                        aria-label="Judul artikel baru"
                    />

                    <Button>Tambah Artikel</Button>
                </form>
            </section>

            <section className="panel">
                <div className="section-heading">
                    <div>
                        <h2>Daftar Artikel</h2>
                        <p className="muted">
                            Jelajahi artikel yang tersedia.
                        </p>
                    </div>

                    <Button
                        variant="secondary"
                        onClick={() =>
                            setShowArticles((previousValue) => !previousValue)
                        }
                    >
                        {showArticles ? "Sembunyikan" : "Tampilkan"}
                    </Button>
                </div>

                <input
                    className="search-input"
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Cari judul artikel..."
                    aria-label="Cari artikel"
                />

                {showArticles ? (
                    <div className="article-grid">
                        {filteredArticles.length > 0 ? (
                            filteredArticles.map((article) => (
                                <article className="article-card" key={article.id}>
                                    <span className="category">
                                        {article.category}
                                    </span>

                                    <h3>{article.title}</h3>
                                    <p>{article.content}</p>
                                </article>
                            ))
                        ) : (
                            <div className="empty-state">
                                <h3>Artikel tidak ditemukan</h3>
                                <p>Coba gunakan kata kunci yang berbeda.</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <p className="empty-state">
                        Daftar artikel sedang disembunyikan.
                    </p>
                )}
            </section>

            <footer>
                Mini Project React Fundamentals · 2026
            </footer>
        </main>
    );
}
