
import Link from "next/link";
import { getArticles, type Article } from "../lib/strapi";

export default async function Home() {
    let articles: Article[] = [];

    try {
        articles = await getArticles();
    } catch (error) {
        console.error("Gagal mengambil artikel:", error);
    }

    return (
        <main className="site">
            <div className="container">
                <section className="hero">
                    <p className="eyebrow">RUANG BACA DIGITAL</p>

                    <h1>
                        Temukan inspirasi dari setiap
                        <br className="desktop-break" /> artikel.
                    </h1>

                    <p className="hero-description">
                        Kumpulan bacaan untuk menambah pengetahuan dan menemukan
                        ide baru setiap hari.
                    </p>

                    <a href="#artikel" className="hero-button">
                        Jelajahi Artikel →
                    </a>
                </section>

                <section id="artikel" className="articles-section">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">KOLEKSI BACAAN</p>
                            <h2>Artikel Terbaru</h2>
                        </div>

                        <span className="article-count">
                            {articles.length} artikel
                        </span>
                    </div>

                    {articles.length === 0 ? (
                        <div className="empty-state">
                            <h3>Belum ada artikel</h3>
                            <p>
                                Pastikan Strapi berjalan dan artikel sudah diterbitkan.
                            </p>
                        </div>
                    ) : (
                        <div className="article-grid">
                            {articles.map((article) => (
                                <article
                                    className="article-card"
                                    key={article.documentId ?? article.id}
                                >
                                    <div className="article-icon">✿</div>
                                    <p className="article-label">ARTIKEL</p>
                                    <h3>{article.title}</h3>

                                    <p className="article-description">
                                        {article.description ||
                                            article.excerpt ||
                                            "Temukan informasi dan wawasan menarik dalam artikel ini."}
                                    </p>

                                    <Link
                                        className="read-more"
                                        href={`/articles/${article.slug}`}
                                    >
                                        Baca selengkapnya →
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
